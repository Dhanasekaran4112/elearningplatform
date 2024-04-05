
import './App.css';
import Addfile from './components/Addfiles';
import FileDetail from './components/Filedetails';
import NavBar from './components/Navbar';
import Showfile from './components/Showfiles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Updatefiles from './components/Updatefiles';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Showfile/>}/>
          <Route path='/showfiles' element={<Showfile/>}/>
          <Route path='/addfiles' element={<Addfile/>}/>
          <Route path='/filedetail/:id' element={<FileDetail/>}/>
          <Route   path='/updatefile/:id' element={<Updatefiles/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
