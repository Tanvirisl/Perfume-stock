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
import Notfound from './NotFound/Notfound';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import MyItem from './Home/Service/MyItem';
import ManageItem from './Home/Service/ManageItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update/:id' element={
          <RequreAuth>
            <UpdateService></UpdateService>
          </RequreAuth>
        }></Route>
        <Route path='/addItem' element={<AddUser></AddUser>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/manageItem' element={<ManageItem></ManageItem>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;