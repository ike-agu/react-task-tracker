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



  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} onDelete = { deleteTask } />
    </div>
  );
}

export default App;
