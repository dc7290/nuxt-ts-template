import { Plugin } from '@nuxt/types'
import axiosClient from '@aspida/axios'
import api, { ApiInstance } from '~/apis/$api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: ApiInstance
  }
  interface Context {
    $api: ApiInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: ApiInstance
  }
}

const apiPlugin: Plugin = ({ $axios }, inject) => inject('api', api(axiosClient($axios)))

export default apiPlugin
