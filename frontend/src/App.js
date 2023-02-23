import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Forgot from './components/forgotPassword/Forgot';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot' element={<Forgot />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
