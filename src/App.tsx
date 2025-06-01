import {TodolistItem} from "./TodolistItem.tsx";
import type {Tasks} from "./TasksList.tsx";


export const App = () => {
    const tasks1: Tasks[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: Tasks[] = [
        { id: 1, title: 'Milk', isDone: true },
        { id: 2, title: 'Orange', isDone: false },
        { id: 3, title: 'Apple', isDone: false },
    ]

    return (
        <div className="App">
            <TodolistItem title='What to learn' tasks={tasks1}/>
            <TodolistItem title='What to buy' tasks={tasks2}/>
        </div>
    );
};

