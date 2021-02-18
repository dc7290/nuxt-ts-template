# composables ディレクトリ

このディレクトリでは、composition api を用いたステートフルなロジックを置きます。

例: useState.ts

```typescript
import { ref, UnwrapRef } from '@nuxtjs/composition-api'

export const useState = <T>(initialValue: T | null) => {
  const state = ref(initialValue)

  const setState = (value: T) => {
    state.value = value as UnwrapRef<T>
  }

  return [state, setState] as const
}
```
