import './App.css';
import Login from './container/Login.tsx';
import Register from './container/Register.tsx';
import {Routes,Route} from 'react-router-dom';
import Forget from './container/Forget.tsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
           <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/forgetpassword" element={<Forget/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
