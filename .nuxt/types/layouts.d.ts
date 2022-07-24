import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/DELL/Desktop/My Vues/e-skills/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}