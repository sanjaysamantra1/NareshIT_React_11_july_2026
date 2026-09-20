import React from 'react'
import ToDo from './ToDo'
import AddToDo from './AddToDo'
import { useSelector } from 'react-redux';

export default function ToDoList() {
    const todoArr = useSelector((state) => state.todoReducer.todoList);
    const CompletedToDos = todoArr.filter(todo => todo.isCompleted);

    return <>
        <div className='col-sm-4 offset-4'>
            <div className='p-3 m-3 border border-3 rounded-3'>
                <h2 className='text-center'>ToDo List Using REDUX</h2>
                <hr />
                <AddToDo />
                <hr />
                {todoArr.map((todoObj, ind) => {
                    return <ToDo todoObj={todoObj} key={ind} />
                })}
                <hr />
                {CompletedToDos.length}/{todoArr.length} are completed
            </div>
        </div>
    </>
}
