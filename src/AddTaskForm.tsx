import {Button} from "./Button.tsx";

type AddTaskForm = {
    title: string
}

export const AddTaskForm = ({title}: AddTaskForm) => {
    return (
        <div>
            <input type="text" />
            <Button title={title}/>
        </div>
    );
};

