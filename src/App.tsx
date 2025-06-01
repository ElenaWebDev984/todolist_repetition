import {TodolistItem} from "./TodolistItem.tsx";


export const App = () => {
    return (
        <div className="App">
            <TodolistItem title='What to learn'/>
            <TodolistItem title='What to buy'/>
            <TodolistItem title='What to read'/>
        </div>
    );
};

