// import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// 2. Jude Okagu -N01407704

function App() {
  return (
    <Router>
      <div className="App">
       
      <header className="App-header">
          </header>
      <Routes>
      <Route path="/" element={ <Register/>} /> 
      <Route path="/login" element={ <Login/>} /> 
      </Routes> 
        </div>
    </Router>

   
  );
}

export default App;
