/* eslint-disable */
import { Plugin } from '@nuxt/types'

export const pagesPath = {
  users: {
    $url: (url?: { hash?: string }) => ({ path: '/users/', hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ path: '/', hash: url?.hash })
}

export type PagesPath = typeof pagesPath

declare module 'vue/types/vue' {
  interface Vue {
    $pagesPath: PagesPath
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pagesPath: PagesPath
  }

  interface Context {
    $pagesPath: PagesPath
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $pagesPath: PagesPath
  }
}

const pathPlugin: Plugin = (_, inject) => {
  inject('pagesPath', pagesPath)
}

export default pathPlugin
