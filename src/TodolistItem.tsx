import {TodolistTitle} from "./TodolistTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {Button} from "./Button.tsx";

type TodolistItemTypes =  {
    title: string
}


export const TodolistItem = ({title}: TodolistItemTypes) => {
    return (
        <div>
            <TodolistTitle title={title}/>
            <AddTaskForm title='+'/>
            <ul>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/>
                    <span>React</span>
                </li>
            </ul>
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='completed'/>
            </div>

        </div>
    );
};

