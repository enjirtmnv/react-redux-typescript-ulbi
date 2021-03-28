export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number,
}

export enum TodoActionsTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROS = 'FETCH_TODOS_ERROS',
    FETCH_TODO_PAGE = 'FETCH_TODO_PAGE', //изменение текущей страницы
}

interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODOS,
}

interface FetchTodoSuccessAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
    payload: any[],
}

interface FetchTodoErrorAction {
    type: TodoActionsTypes.FETCH_TODOS_ERROS;
    payload: string,
}

interface SetTodoPage {
    type: TodoActionsTypes.FETCH_TODO_PAGE;
    payload: number,
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetTodoPage