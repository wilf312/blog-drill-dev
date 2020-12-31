// src/mocks/browser.js
import { setupWorker, rest } from 'msw'
import { handlers } from './handlers'
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)

export type Msw = {
  worker: typeof worker,
  rest: typeof rest
}

declare global {
  interface Window {
    msw: Msw
  }
}


window.msw = {
  worker,
  rest,
}
