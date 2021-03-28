import {TodoAction, TodoActionsTypes, TodoState} from "../../types/todo";

const initialState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
};


export const todoReducer = (state : TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return {...state, loading: true};
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodoActionsTypes.FETCH_TODOS_ERROS:
            return {...state, loading: false, error: action.payload};
        case TodoActionsTypes.FETCH_TODO_PAGE:
            return {...state, page: action.payload};
        default:
            return state

    }
};