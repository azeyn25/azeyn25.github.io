import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/abdullahzeyn/code/azeyn25/Zeyn Website/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}