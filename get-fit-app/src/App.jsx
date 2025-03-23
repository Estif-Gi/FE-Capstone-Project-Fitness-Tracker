import './App.css'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/login'
import AddWorkout from './pages/addWorkout'
import WorkOutList from "./pages/workOutList"
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path="/addWorkout" element={<AddWorkout/>}/>
          <Route path="/workOutList" element={<WorkOutList/>}/>

        </Routes>
      </Router>
      
    </div>
   
  )
}

export default App
