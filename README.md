# Browser Monads

Interface for the `window` and `document` variables of a webpage.  

## What is a monad?

You don't really have to know what a monad is since the variables provided by this library aren't *really* monads.  Let's take a look at the `window` variable to get a basic understanding. The main purpose of this variable is that it *may be a window* or it *may be nothing*. You don't know what it is and you shouldn't really care. In case it is a window, you can use it as you're used to. In case it is not a window, you can still use the same functions on the instance. The caring about the existence of the variable is already taken care of.  

This same concept is applicable to the `document` variable too. You can use the `exists` function in order to check if the variable exists or you are operating on an instance that contains *nothing*.

## Why use monads?

This library makes it possible to use these variables without checks with [Gatsby](https://www.gatsbyjs.org). This way of programming splits the defensive part from your own code, since you don't have to care anymore about the environment in which you are running. This makes it especially useful with server-side rendering. More info about the `nothing`-type can be found [here](https://github.com/slmgc/Nothing).  

## Show me the code!

```js
import { window, document, exists } from 'browser-monads';

// inside browser ? window.location.href : ''
window.location.href;

// inside browser ? true : false
exists(window);
```
