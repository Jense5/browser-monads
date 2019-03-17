declare module 'browser-monads' {
  export const window: Window;
  export const document: Document;
  export function exists(variable: any): boolean;
}
