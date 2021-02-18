<template>
  <div class="container mx-auto px-20 py-100">
    <NLink :to="$pagesPath.$url().path" class="font-bold text-lg">TOP</NLink>
    <p v-show="fetchState.pending" class="text-sm mt-20">...Loading</p>
    <div v-show="!fetchState.pending" class="mt-20">{{ users }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
import type { User } from '~/types/apis/User'

export default defineComponent({
  setup() {
    const users = ref<User[]>([])

    const { $api } = useContext()
    const { fetch, fetchState } = useFetch(async () => {
      users.value = await $api.users.$get()
    })

    fetch()

    return { users, fetchState }
  },
})
</script>
