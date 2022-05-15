

export interface TodoItemInterface {
    id: string;
    name:string,
    description:string,
    created_at:string,
    updated_at:string
}

export type TodoListInterface = TodoItemInterface[]

export interface TodoPayload{
    name:string,
    description:string
}