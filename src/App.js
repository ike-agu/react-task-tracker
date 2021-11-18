import {useState} from  'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

// this function is to delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
} 


// This function is the green toggle reminder next to tasks 

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
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete = 
     { deleteTask } onToggle = {toggleReminder}/> ) : ('No tasks to display')}
    </div>
  );
}

export default App;
