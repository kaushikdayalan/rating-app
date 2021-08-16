import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

//CSS import
import './App.css';

// import router
import MainRoutes from './Routes/MainRoutes';




const App = () =>{
  return(
    <Router>
      <MainRoutes />
    </Router>
  )
}

export default App;
