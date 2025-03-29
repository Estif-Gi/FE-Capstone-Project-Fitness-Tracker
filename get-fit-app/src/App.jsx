import { QueryClient , QueryClientProvider  } from '@tanstack/react-query'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/login'
import AddWorkout from './pages/addWorkout'
import WorkOutList from "./pages/workOutList"
import WGER from "./pages/WGERexercise"
import GraphInput from './pages/progress'
import Graph from './pages/graph'
const queryClient = new QueryClient();

function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path="/addWorkout" element={<AddWorkout/>}/>
            <Route path="/workOutList" element={<WorkOutList/>}/>
            <Route path="/exerciseList" element={<WGER/>}/>
            <Route path="/graphInput" element={<GraphInput/>}/>
            <Route path="/graph" element={<Graph/>}/>
            
          </Routes>
        </Router>
  
      </div>
    </QueryClientProvider>
  
   
  )
}

export default App
