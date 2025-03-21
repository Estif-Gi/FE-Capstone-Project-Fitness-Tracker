import './App.css'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/login'
import Exp from './pages/exp'
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path="/exp" element={<Exp/>}/>
        </Routes>
      </Router>
      
    </div>
   
  )
}

export default App
