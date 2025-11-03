import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/common/NavBar";
import Register from "./pages/Register";
import ProjectsPage from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="min-h-dvh">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
