import { useReducer, useRef } from "react";

const initialTodos = [
    { id: 1, title: "Complete Javascript Assignment", complete: false },
    { id: 2, title: "Learn React Redux", complete: true },
    { id: 3, title: "Learn Java SpringBoot", complete: true },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default function ToDoList() {
    const [todoArr, dispatch] = useReducer(reducer, initialTodos);
    const myref1 = useRef();

    const addNewTodo = (title) => {
        const actionObj = {
            type: "ADD",
            payload: {
                id: todoArr.length+1,
                title: title,
                complete: false,
            },
        };
        dispatch(actionObj);
    };

    const handleComplete = (todo) => {
        dispatch({ type: "TOGGLE", id: todo.id });
    }
    const deleteTodo = (id) => {
        dispatch({ type: "DELETE", id: id }); // dispatching Action
    }

    return <>
        <h3 className="text-center">ToDo CRUD using useReducer</h3>
        <input ref={myref1} />
        <button onClick={() => addNewTodo(myref1.current.value)}>Add todo</button>
        <hr />

        {todoArr.map((todo) => (
            <div key={todo.id}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => handleComplete(todo)}
                    />
                    <span
                        style={{
                            textDecoration: todo.complete ? "line-through" : "none",
                        }}
                    >
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
                    </span>
                </label>
            </div>
        ))}
    </>
}
