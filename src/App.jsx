import './styles/reset.css';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
  )
}

export default App;
