import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Header from './Components/Pages/Shared/Header/Header';
import Blogs from './Components/Pages/Blogs/Blogs';
import Stocks from './Components/Pages/Stocks/Stocks';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/stocks' element={<Stocks></Stocks>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
