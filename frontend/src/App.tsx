import Home from "./pages/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import NavBar from "./components/common/NavBar";
import Register from "./pages/Register";

function App() {
  return (
    <div className="min-h-dvh">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
