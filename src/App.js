import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Register from './components/Register/Register.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
