import "./App.css";
import Login from "./assets/components/Login";
import Home from "./assets/components/Home";
import Edit from "./assets/components/Edit";
import Protected from "./assets/components/Protected";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="/edit" element={<Protected Component={Edit} />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
