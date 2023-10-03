import {Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signin/SignIn";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
     
    </div>
  );
}

export default App;
