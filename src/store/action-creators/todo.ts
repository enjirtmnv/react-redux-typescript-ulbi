import {TodoAction, TodoActionsTypes} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionsTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit}
            });
            setTimeout( () => {
                dispatch({ type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data })
            }, 500 )

        } catch(e) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_ERROS,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
};

export function setTodoPage(page: number): TodoAction{
    return {type: TodoActionsTypes.FETCH_TODO_PAGE, payload: page}
}