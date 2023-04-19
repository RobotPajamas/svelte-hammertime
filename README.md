# svelte-hammertime

svelte-hammertime is a library that wraps HammerJS gesture handlers in Svelte use directives. It allows you to easily add touch and gesture support to your Svelte applications.

The library also exposes Typescript types for Svelte, which can be useful if you are using Typescript in your Svelte project.

## Installation

You can install svelte-hammertime using npm:

```bash
npm install --save svelte-hammertime
```

## Usage

To use svelte-hammertime, you first need to import the desired gesture handlers from the library:

```js
import { pan, swipe } from 'svelte-hammertime';
```

Next, you can use the use directive to attach the gesture handlers to an element:

```svelte
<script>
  import { pan, swipe } from 'svelte-hammertime';

  let x = 0;
  let y = 0;

  function handlePan(event) {
    x += event.deltaX;
    y += event.deltaY;
  }

  function handleSwipe(event) {
    console.log('Swiped!', event.direction);
  }
</script>


<div use:pan={handlePan} use:swipe={handleSwipe}>...</div>
```

In this example, the pan and swipe gesture handlers are attached to a div element using the use directive. When the user pans on the element, the handlePan function is called with the pan event, and the x and y variables are updated accordingly. When the user swipes on the element, the handleSwipe function is called with the swipe event, and a message is logged to the console.

Note that you can attach multiple gesture handlers to the same element by using multiple use directives:

```html
<div use:pan={handlePan} use:swipe={handleSwipe}>...</div>
```

## Available Gesture Handlers

The following gesture handlers are available in svelte-hammertime:

- pan
- pinch
- press
- rotate
- swipe
- tap

You can import them individually or all together using the wildcard:

```js
import { pan, swipe } from 'svelte-hammertime';
import * as hammertime from 'svelte-hammertime';
```


## Typescript Support
svelte-hammertime also provides Typescript types for the gesture handlers. If you are using Typescript in your Svelte project, you can import the types from the library:

```ts
import type { PanEvent } from 'svelte-hammertime';
```

## License

svelte-hammertime is released under the MIT License.

