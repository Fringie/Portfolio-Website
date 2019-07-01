import React, { Component } from 'react';
import { initializeIcons } from '@uifabric/icons';
import * as $ from "jquery";
import 'normalize.css';
import './theme.scss';

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./content-containers/AboutMe/AboutMe";
import Portfolio from "./content-containers/Portfolio/Portfolio";
import Skills from "./content-containers/Skills/Skills";
import Footer from './content-containers/Footer/Footer';

export default class App extends Component {

  render() {
    this.hideIE();
    initializeIcons();
    return (
      <div className="App">
        <NavigationBar/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }

  private hideIE() {
    let ua = window.navigator.userAgent;
    let old_ie = ua.indexOf('MSIE ');
    let new_ie = ua.indexOf('Trident/');
    let element =  document.getElementsByClassName('ie11')[0];
    if (!((old_ie > -1) || (new_ie > -1))) {
      //.style.visibility = 'hidden';
      element.setAttribute("hidden", "false");
    }
  }
}