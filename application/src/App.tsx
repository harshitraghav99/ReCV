import React,{Component} from 'react';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume/Resume';
import { Routes,Route } from 'react-router-dom';
import Home from './Content/Home'
const  App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      
    </div>
=======
    <React.Fragment>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path ="/Resume" element = {<Resume />} />
      </Routes>
        
    </React.Fragment>
    
     
    
>>>>>>> test
  );
}

export default App;
