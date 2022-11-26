import TopBar from './components/TopBar';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './login/Login';
import Register from './register/Register';
import Write from './components/Write.js/Write';

 

function App() {
  return (
    <>
       
      <TopBar></TopBar>
      <Routes>

      <Route path='/home' element={ <Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/reg' element={<Register/>}></Route>
      <Route path='/write' element={<Write/>}></Route>
      </Routes>
     
    </>
  );
 }

 export default App;
 