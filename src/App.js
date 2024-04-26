import logo from './logo.svg';
import './App.css';
import ImagesList from './imagesList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './Login';
import About from './About';
import ProtectedRoute from './protectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImagesList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route element={<ProtectedRoute/>}>
              <Route path='/about' element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
