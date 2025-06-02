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
       tasks.length === 0 ?(
           <p>No task</p>
           ) : (
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
           )

   )
};

