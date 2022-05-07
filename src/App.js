import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './LoginReg/Login';
import Header from './Home/Header/Header';
import Register from './LoginReg/Register';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
