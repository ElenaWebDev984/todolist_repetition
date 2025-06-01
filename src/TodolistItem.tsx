import {TodolistTitle} from "./TodolistTitle.tsx";


export const TodolistItem = () => {
    return (
        <div>
            <TodolistTitle title='What to learn'/>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
};

