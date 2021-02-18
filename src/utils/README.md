# utils ディレクトリ

このディレクトリでは、ステートレスなロジックを置きます。

例: todo.ts

```typescript
export type Status = 'UNDO' | 'DOING' | 'DONE'
export type Todo = {
  text: string
  status: Status
}

export const make = (text: string) => ({
  text,
  status: 'UNDO',
})

export const changeState = (status: Status) => (todo: Todo) => ({
  ...todo,
  status,
})

export const toUndo = changeState('UNDO')
export const toDoing = changeState('DOING')
export const toDone = changeState('DONE')
```
