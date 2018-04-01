# Browser Monads

Interface for the default `window` and `document` variables (which are `nothing` when unavailable). Makes it possible to use `window` and `document` without checks with [Gatsby](https://www.gatsbyjs.org). More info about the `nothing`-type can be found [here](https://github.com/slmgc/Nothing).  

```js
import { window, document, exists } from 'browser-monads';

// Outside browser: 'Location: '
// Inside browser: 'Location: {href}'
console.log(`Location: ${window.location.href}`);

// Inside browser: true.
// Outside browser: false.
exists(document);
```
