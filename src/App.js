import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import ProtectedPage from './component/ProtectedPage/ProtectedPage';
import Sinup from './component/Sinup/Sinup';
import Login from './component/Login/Login';
import ProtectRoute from './component/ProtectRoute/ProtectRoute';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/protect' element={<ProtectRoute>
          <ProtectedPage></ProtectedPage>
          </ProtectRoute>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Sinup></Sinup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
