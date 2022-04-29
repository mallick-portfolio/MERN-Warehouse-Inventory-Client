import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Register from './components/Register/Register.jsx';
import Login from './components/pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.jsx';
function App() {
  
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />



        {/* 404 page route/ Page not found route */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
