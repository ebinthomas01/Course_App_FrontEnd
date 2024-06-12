import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import VIewAll from './components/VIewAll';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCourse/>} />
        <Route path='/Search' element={<Search/>}/>
        <Route path='/VIewAll' element={<VIewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
