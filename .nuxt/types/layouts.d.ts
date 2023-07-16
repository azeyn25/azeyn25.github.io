import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "story"
declare module "/Users/abdullahzeyn/code/azeyn25/Zeyn Website/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}