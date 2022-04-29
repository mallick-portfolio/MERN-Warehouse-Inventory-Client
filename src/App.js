import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/pages/Home/Home';
import Banner from './components/pages/Banner/Banner.jsx';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
