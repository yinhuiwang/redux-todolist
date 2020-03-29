import { DEL_TODO, ADD_TODO, CHECKED_TODO, UPDATE_ALL_TODOS_FLAG, DELETE_TODOS_BY_FLAG } from './actionTypes'

export const getDelTodoAction = (todoId)=>({
    type: DEL_TODO, todoId
});

export const getAddTodoAction = (todo)=>({
    type: ADD_TODO, todo
});

export const getCheckedTodoAction = (todoId, flag)=>({
    type: CHECKED_TODO, todoId, flag
});

export const getUpdateAllTodosFlagAction = (flag)=>({
    type: UPDATE_ALL_TODOS_FLAG, flag
});

export const getDeleteTodosByFlagAction = ()=>({
    type: DELETE_TODOS_BY_FLAG
});