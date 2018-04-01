# Browser Monads

 Will provide an interface for the default `window` and `document` variables. They will be `nothing` when they are unavailable (which has the same api as the real variables). For more information about the `nothing`-type, check out the [documentation](https://github.com).  

[This is also very useful with Gatsby.](https://medium.com)

### Usage

```js
import { window, document } from 'browser-monads';

// Result outside browser: 'Location: '
// Result inside browser: 'Location: {href}'
console.log(`Location: ${window.location.href}`);
```
