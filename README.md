## React custom hook for scroll restoration

This is a custom React hook that facilitates scroll restoration for a specific element. It allows you to save and restore the scroll position of an element, optionally persisting it to `localStorage` or `sessionStorage`. This can be useful in scenarios where you want to maintain scroll positions across navigation or page refreshes.<br>
It differs from [ScrollRestoration](https://reactrouter.com/en/main/components/scroll-restoration) in that it can be attached to a specific dom element.

### Demo

https://codesandbox.io/p/sandbox/aged-tree-kr7y6w

### Installation

```bash
npm install use-scroll-restoration
```

### Usage

Here's how you can use the `useScrollRestoration` hook in your React components:

```jsx
import React from 'react';
import { useScrollRestoration } from 'use-scroll-restoration';

function ScrollRestorationExample() {
  const { ref, setScroll } = useScrollRestoration('exampleKey', {
    debounceTime: 200,
    persist: 'localStorage',
  });

  return (
    <div ref={ref} style={{ height: '500px', overflow: 'auto' }}>
      {/* Your scrollable content */}
    </div>
  );
}
```

### API

#### `useScrollRestoration(key: string, options?: ScrollRestorationOptions)`

- `key` (required): A unique key to identify the scroll restoration context.
- `options` (optional): An object containing additional options:
    - `debounceTime` (default: `100`): The debounce time (in milliseconds) before saving scroll position.
    - `persist` (default: `false`): Specifies where to persist scroll position. Can be `false`, `'localStorage'`, or `'sessionStorage'`.

Returns an object with the following properties:

- `ref`: A callback that sets the DOM element reference. Attach this to the `ref` prop of the scrollable element you want to manage.
- `setScroll({ x, y })`: A function to manually set the scroll position, where `x` and `y` are optional scroll coordinates.
