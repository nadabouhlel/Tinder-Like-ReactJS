import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

import './App.css';
{/* import { BrowserRouter as Router , Routes , Route } from "react-router-dom";*/}

function App() {
  return (
    <div className="App">
            {/*header with tinder icons using material UI*/}
            {/*i installed the react router to be able to navigate between pages but i made a single app page no need*/}
  
    <Header/> 
    <TinderCards />
    <SwipeButtons/>



             {/*i created a js file tindercards to display the code for cards */}
             {/*installed componnet for tinder cards*/}


    </div> 
  );
};

export default App;
