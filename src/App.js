
import './App.css';
import Addfile from './components/Addfiles';
import FileDetail from './components/Filedetails';
import NavBar from './components/Navbar';
import Showfile from './components/Showfiles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Updatefiles from './components/Updatefiles';
import  Home  from './components/Home';
import Python from './pages/Python';
import Java from './pages/Java';
import Javascript from './pages/Javascript';
import Bootstrap from './pages/Bootstrap';
import Machine from './pages/Machine';
import Data from './pages/Data';
import Iot from './pages/Iot';
import Network from './pages/Network';
import Filedetailcourse from './components/Filedetailcourse';
import Filedetailu from './components/Filedetailu';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/Java' element={<Java/>}/>
          <Route path='/Javascript' element={<Javascript/>}/>
          <Route path='/Bootstrap' element={<Bootstrap/>}/>
          <Route path='/Machine' element={<Machine/>}/>
          <Route path='/Data' element={<Data/>}/>
          <Route path='/Iot' element={<Iot/>}/>
          <Route path='/Network' element={<Network/>}/>
          <Route path='/showfiles' element={<Showfile/>}/>
          <Route path='/filedetailcourse' element={<Filedetailcourse/>}/>
          <Route path='/filedetailu/:id' element={<Filedetailu/>}/>
          <Route path='/addfiles' element={<Addfile/>}/>
          <Route path='/filedetail/:id' element={<FileDetail/>}/>
          <Route   path='/updatefile/:id' element={<Updatefiles/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
