<script lang="ts">
  /* eslint-disable */
  import { pan } from "$lib";
  import { DIRECTION_ALL } from "hammerjs";

  // The persistent coordinates of the box
  let x = 0;
  let y = 0;

  // A set of cached coordinates of the box when the pan starts
  let startX = 0;
  let startY = 0;

  function handlePanStart(event: HammerInput) {
    startX = x;
    startY = y;
  }

  function handlePanEvent(event: HammerInput) {
    // coords = { x: event.center.x, y: event.center.y };
    x = startX + event.deltaX;
    y = startY + event.deltaY;
  }
</script>

<div class="flex items-center justify-center h-screen bg-gray-100">
  <div
    style="transform: translate({x}px, {y}px);"
    class="absolute left-0 top-0 bg-red-600 text-white font-bold rounded-lg border shadow-lg p-10"
    use:pan={{ direction: DIRECTION_ALL }}
    on:panstart={(event) => handlePanStart(event.detail)}
    on:panmove={(event) => handlePanEvent(event.detail)}>
    <p>Move me</p>
    <p>{`x: ${x}, y: ${y}`}</p>
  </div>
</div>
