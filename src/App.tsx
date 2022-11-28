import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Contacts from "./containers/Contacts/Contacts";
import Portfolio from "./containers/Portfolio/Portfolio";
import FastFood from "./containers/Fast Food Menu Calculator/Fast Food";
import BurgerMaker from "./containers/Burger Maker/BurgerMaker";
import PokerFace from "./containers/Poker/PokerFace";
import './App.css';

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
          )}/>
          <Route path='/fastfoodcalc' element={(
            <FastFood/>
          )}/>
          <Route path='/burgermaker' element={(
            <BurgerMaker/>
          )}/>
          <Route path='/poker' element={(
            <PokerFace/>
          )}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
