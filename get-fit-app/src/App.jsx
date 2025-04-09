import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/login";
import AddWorkout from "./components/addWorkout";
import Home from "./pages/home";
import Ninja from "./pages/ninjasAPI";
import GraphInput from "./pages/progress";
import Landing from "./pages/landingPage";
import About from "./pages/About";
import Nav from "./components/nav";
import Footer from "./components/footer";

const queryClient = new QueryClient();

function AppLayout() {
  const location = useLocation();
  const hideNavAndFooter = ["/signup", "/login" , "/"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen font-Nunito">
      {!hideNavAndFooter && <Nav />}
      <main className="flex-1">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/addWorkout" element={<AddWorkout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exerciseList" element={<Ninja />} />
          <Route path="/progress" element={<GraphInput />} />
          <Route path="/" element={<Landing />} />
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
