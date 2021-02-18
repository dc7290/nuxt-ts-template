/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'
import { Methods as Methods1 } from './users'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'

  return {
    users: {
      get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).json(),
    $get: (option?: { config?: T }) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
