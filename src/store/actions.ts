// Actions constants

export const ADD_TODO = '[TODO] Add Todo';
export const REMOVE_TODO = '[REMOVE_TODO] Remove Todo';


// action creators
export class AddTodo {
    readonly type = ADD_TODO;
    constructor(private payload: any) {}
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;
    constructor(private payload: any) {}
}