import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './LoginReg/Login';
import Header from './Home/Header/Header';
import Register from './LoginReg/Register';
import 'react-toastify/dist/ReactToastify.css';
import Inventorys from './Inventorys/Inventorys';
import UpdateService from './UpdateService/UpdateService';
import AddUser from './AddUser/AddUser';
import RequreAuth from './RequereAuth/RequreAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={
          <RequreAuth>
            <Inventorys></Inventorys>
          </RequreAuth>
        }></Route>
        <Route path='/update/:id' element={<UpdateService></UpdateService>}></Route>
        <Route path='/addItem' element={<AddUser></AddUser>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;