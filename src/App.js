import {useState} from  'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'React Course',
        day: 'November 18th at 10am',
        reminder: true,
    },
    {
        id:2,
        text:'Job Interview',
        day: 'November 19th at 2pm',
        reminder: true, 
    },
    {
        id:3,
        text:'Basketball game',
        day: 'November 18th at 8pm',
        reminder: true,
    },
    {
        id:4,
        text:'Food Shopping',
        day: 'November 18th at 9.30am',
        reminder:false,
    }
])

// add task function
const addTask = (task) => {
  console.log(task)
}

//  delete task function 
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
} 


// green toggle reminder next to tasks  function

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id? {...task, reminder : !task.reminder} : task
    )
  )

}


  return (
    <div className="container">
     <Header />
     <AddTask onAdd = {addTask}/>
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete = 
     { deleteTask } onToggle = {toggleReminder}/> ) : ('No tasks to display')}
    </div>
  );
}

export default App;
