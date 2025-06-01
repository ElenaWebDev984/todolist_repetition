type AddTaskForm = {
    title: string
}

export const AddTaskForm = ({title}: AddTaskForm) => {
    return (
        <div>
            <input type="text" />
            <button>{title}</button>
        </div>
    );
};

