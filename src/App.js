import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Header from './Components/Pages/Shared/Header/Header';
import Blogs from './Components/Pages/Blogs/Blogs';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Pages/Shared/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import SignUp from './Components/Pages/SignUp/SignUp';
import UpdateDetail from './Components/Pages/UpdateDetail/UpdateDetail';
import Updates from './Components/Pages/Updates/Updates';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import AddItem from './Components/Pages/AddItem/AddItem';
import ManageItem from './Components/Pages/ManageItem/ManageItem';
import MyItem from './Components/Pages/MyItem/MyItem';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/updates' element={<Updates></Updates>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/update/:updateId' element={
          <RequireAuth>
            <UpdateDetail></UpdateDetail>
          </RequireAuth>}>
        </Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
