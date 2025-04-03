import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/login";
import AddWorkout from "./pages/addWorkout";
import Home from "./pages/home";
import Ninja from "./pages/ninjasAPI";
import GraphInput from "./pages/progress";
import Graph from "./pages/graph";
import About from "./pages/About";
import Nav from "./pages/nav";
import Footer from "./pages/footer";

const queryClient = new QueryClient();

function AppLayout() {
  const location = useLocation();
  const hideNavAndFooter = ["/signup", "/login"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavAndFooter && <Nav />}
      <main className="flex-1">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/addWorkout" element={<AddWorkout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exerciseList" element={<Ninja />} />
          <Route path="/progress" element={<GraphInput />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppLayout />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
