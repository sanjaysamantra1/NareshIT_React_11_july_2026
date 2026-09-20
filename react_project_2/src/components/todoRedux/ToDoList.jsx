import React from 'react'
import ToDo from './ToDo'
import AddToDo from './AddToDo'
import { useSelector } from 'react-redux';

export default function ToDoList() {
    const todoArr = useSelector((state) => {
        console.log('Read new data from state')
        return state.todoReducer.todoList
    });
    const CompletedToDos = todoArr.filter(todo => todo.isCompleted);

    return <>
        <div className='col-sm-6 offset-3'>
            <div className='p-3 m-3 border border-3 rounded-3'>
                <h2 className='text-center'>ToDo List Using REDUX</h2>
                <AddToDo />
                <br /><br />
                {todoArr.map((todoObj, ind) => {
                    return <ToDo todoObj={todoObj} key={ind} />
                })}
                {CompletedToDos.length}/{todoArr.length} are completed
            </div>
        </div>
    </>
}
