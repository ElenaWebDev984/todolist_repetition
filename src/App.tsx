import {TodolistItem} from "./TodolistItem.tsx";
import type {Tasks} from "./TasksList.tsx";
import {useState} from "react";

export type FilterValues = 'all' | 'active' | 'completed'


export const App = () => {
    const [filter, setFilter] = useState<FilterValues>('all')

    const [tasks, setTasks] = useState<Tasks[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ]);

    const deleteTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const changeFilter = (filterValues: FilterValues) => {
        setFilter(filterValues)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }


    return (
        <div className="App">
            <TodolistItem title='What to learn'
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}/>
        </div>
    );
};

