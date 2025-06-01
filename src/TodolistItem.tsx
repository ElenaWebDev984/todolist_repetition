import {TodolistTitle} from "./TodolistTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {Button} from "./Button.tsx";
import {type Tasks, TasksList} from "./TasksList.tsx";

type TodolistItemTypes =  {
    title: string
    tasks: Tasks[]
}


export const TodolistItem = ({title, tasks}: TodolistItemTypes) => {
    return (
        <div className='container'>
            <TodolistTitle title={title}/>
            <AddTaskForm title='+'/>
            <TasksList tasks={tasks} />
            <div className='btn-wrapper'>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='completed'/>
            </div>

        </div>
    );
};

