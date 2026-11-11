import {FilterValues, Task} from "./App.tsx";
import {Button} from "./components/Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskId:number) => void
    changeFilter: (filter:FilterValues) => void
}

export const TodolistItem = ({title, tasks, date,deleteTask,changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'} />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <Button title={'x'} onClick={()=>deleteTask(task.id)}/>
                                {/*<button onClick={() => deleteTask(task.id)}>x</button>*/}
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} onClick={()=>changeFilter('all')}/>
                <Button title={'Active'} onClick={()=>changeFilter('active')} />
                <Button title={'Completed'} onClick={()=>changeFilter('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    )
}