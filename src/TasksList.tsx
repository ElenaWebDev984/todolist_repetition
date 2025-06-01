type TasksListTypes = {
    tasks: Tasks[]
}

export type Tasks = {
    id: number
    title: string
    isDone: boolean
}

export const TasksList = ({tasks}: TasksListTypes) => {
    return (
        <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone} />
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>
    );
};

