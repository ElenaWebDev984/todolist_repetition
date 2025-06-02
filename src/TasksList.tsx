import {Button} from "./Button.tsx";

type TasksListTypes = {
    tasks: Tasks[]
    onClick?: () => void
    deleteTask: (id: number) => void
}

export type Tasks = {
    id: number
    title: string
    isDone: boolean
}

export const TasksList = ({tasks, deleteTask}: TasksListTypes) => {
   return (
       tasks.length === 0 ?(
           <p>No task</p>
           ) : (
               <ul>
                   {tasks.map(task => {
                       return (
                           <li key={task.id}>
                               <input type="checkbox" checked={task.isDone} />
                               <span>{task.title}</span>
                               <Button title='x' onClick={() => deleteTask(task.id)}/>
                           </li>
                       )
                   })}
               </ul>
           )

   )
};

