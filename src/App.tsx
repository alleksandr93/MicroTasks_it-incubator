import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    function removeTask(id: string,todolistId:string) {
        //tasks[todolistId].filter()
        // let filteredTasks = tasks[todolistId].filter(t=>t.id !== id)
        setTasks({...tasks,[todolistId]: tasks[todolistId].filter(t => t.id !== id)});
    }
    function addTask(todolistId:string,title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({[todolistId]:[...tasks[todolistId],newTask],...tasks});
    }
    function changeStatus(todolistId:string,taskId: string, isDone: boolean) {
        // let task = tasks[todolistId].find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks({...tasks});
        let task = tasks[todolistId].map(el=>el.id===taskId ? {...el,isDone}:el)
        setTasks({...tasks,[todolistId]:task})
    }
    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }

    return (
        <div className="App">
            {todolists.map(mapTodolist => {
                let tasksForTodolist = tasks[mapTodolist.id]
                if (mapTodolist.filter === 'active') {
                    tasksForTodolist = tasks[mapTodolist.id].filter(t => !t.isDone);
                }
                if (mapTodolist.filter === 'completed') {
                    tasksForTodolist = tasks[mapTodolist.id].filter(t => t.isDone);
                }
                return <Todolist key={mapTodolist.id}
                                 title={mapTodolist.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={mapTodolist.filter}
                                 todlistId={mapTodolist.id}/>
            })}

        </div>
    )
        ;
}

export default App;
