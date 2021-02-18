import { User } from '~/types/apis/User'

export type Methods = {
  get: {
    query?: {
      limit?: number
      offset?: number
    }

    resBody: User[]
  }
}
