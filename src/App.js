
import React, { useState } from 'react';
import './App.css';
import Navabar from './components/Navabar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";



function App() {

  


  const [selectedCountry,setSelectedCountry]=useState("in")
  const [selectCategory,setSelectedCategory]=useState("general")
  let pageSize=10



 






  return (
    <>
    <Router>
    <div>
     

        <Navabar setSelectedCountry={setSelectedCountry}  setSelectedCategory={setSelectedCategory} />
        


        <Routes>
         

 
          <Route exact path="/news"  element={ <News   key={Math.random()} pageSize={pageSize}   category={selectCategory}  country={selectedCountry} />}  ></Route>
          <Route exact path="/"  element={ <News   key={Math.random()} pageSize={pageSize}   category="general"  country="in"   />}  ></Route>


        </Routes>
       




        </div>
    </Router>


    
    </>
  )
}

export default App;
