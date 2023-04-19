import Hammer from "hammerjs";
import type { ActionReturn } from "svelte/action";

export const events = [
  "pan",
  "panstart",
  "panmove",
  "panend",
  "pancancel",
  "panleft",
  "panright",
  "panup",
  "pandown",
] as const;

export type PanEvent = (typeof events)[number];
type PanEventAttribute = `on:${PanEvent}`;

export type Attributes = {
  [attribute in PanEventAttribute]?: (e: CustomEvent<HammerInput>) => void;
};

export default function (
  node: HTMLElement,
  options?: RecognizerOptions
): ActionReturn<RecognizerOptions, Attributes> {
  const hammer = new Hammer(node);
  hammer.get("pan").set(options);
  for (const event of events) {
    hammer.on(event, (hammerEvent: HammerInput) =>
      node.dispatchEvent(new CustomEvent(event, { detail: hammerEvent }))
    );
  }
  return {
    update(opt) {
      hammer.get("pan").set(opt);
    },
    destroy() {
      for (const event of events) {
        hammer.off(event);
      }
    },
  };
}
