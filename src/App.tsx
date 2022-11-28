import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Contacts from "./containers/Contacts/Contacts";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path='/' element={(
            <Home/>
          )}/>
          <Route path='/about-me' element={(
            <AboutMe/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
          <Route path='/portfolio' element={(
            <Portfolio/>
          )}>
          </Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
