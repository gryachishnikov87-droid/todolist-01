import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";

export type FilterValues = "all" | "active" | "completed";

export type Task = {
    id: number
    title: string
    isDone: boolean
}
export const App = () => {
    const [filter, setFilter] = useState<FilterValues>('all')
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false}
    ])
    const deleteTask = (taskId: number) => {
        const filtredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filtredTasks)
    }

    // @ts-ignore
    const changeFilter= (filter: FilterValues) => {
return(setFilter(filter))
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }
    // const tasks2: Task[] = []



    // @ts-ignore
    return (
        <div className="app">
            <TodolistItem title="What to learn"
                          tasks={filteredTasks}
                          date="21.10.2026"
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
            />
            {/*<TodolistItem title="Songs" tasks={tasks2}/>*/}
        </div>
    )
}