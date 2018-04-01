# Browser Monads

 Makes it possible to use the `window` and `document` variables ouside the browser.  
 
 In case these variables do not exist, they will be instantiated as instances of `nothing`. Build to use with [Gatsby]() so you can `gatsby build` without issues, but can be used however you want. For more information about the `nothing`-type, please check [this repo]().
 
```
$ npm install --save browser-monads
```

```js
import { window, document } from 'browser-monads';

const path = window.location.href;
```