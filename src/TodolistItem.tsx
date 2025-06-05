import {TodolistTitle} from "./TodolistTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {Button} from "./Button.tsx";
import {type Tasks, TasksList} from "./TasksList.tsx";
import type {FilterValues} from "./App.tsx";

type TodolistItemTypes = {
    title: string
    tasks: Tasks[]
    deleteTask: (id: number) => void
    changeFilter: (filter: FilterValues) => void
}


export const TodolistItem = ({title, tasks, deleteTask, changeFilter}: TodolistItemTypes) => {
    return (
        <div className='container'>
            <TodolistTitle title={title}/>
            <AddTaskForm title='+'/>
            <TasksList tasks={tasks}
                       deleteTask={deleteTask}/>
            <div className='btn-wrapper'>
                <Button title='All' onClick={() => changeFilter('all')}/>
                <Button title='Active' onClick={() => changeFilter('active')}/>
                <Button title='completed' onClick={() => changeFilter('completed')}/>
            </div>

        </div>
    );
};

