
const ADD_TODO = "ADD_TODO";

function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,

    }
}
export default addTodo;

 const DELETE_TODO = "DELETE_TODO";

 function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,

    }
}
export default deleteTodo;


 const UPDATE_TODO = "UPDATE_TODO";

 function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,

    }
}
export default updateTodo;
