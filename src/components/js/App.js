import React, { Component } from 'react';
import '../../css/bootstrap.css';
import '../css/App.css';
import Header from './header';
import Card from './card';
import SmallCard from './smallcard';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.initalizeSwitchTheme();
  // }

  // initalizeSwitchTheme(){
  //   const toogleSwitch = document.querySelector('.switch input[type="checkbox"]');

  //   function switchTheme(e){
  //     if(e.target.checked){
  //       document.documentElement.setAttribute('data-theme', 'dark');
  //     }else{
  //       document.documentElement.setAttribute('data-theme', 'light');
  //     }
  //   }

  //   toogleSwitch.addEventListener('change', switchTheme, false);
  // }

  render(){
    return (
      <header className="App-header">
        <div className="switch-wrapper">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card  title="Facebook" type="fb" insight="1987" subtitle="FOLLOWERS" upgrowth="12"  />
            </div>
            <div className="col-sm">
              <Card  title="Twitter" type="tw" insight="1044" subtitle="FOLLOWERS" upgrowth="99" />
            </div>
            <div className="col-sm">
              <Card  title="Instagram" type="im" insight="11k" subtitle="FOLLOWERS" upgrowth="1099"/>
            </div>
            <div className="col-sm">
              <Card  title="Youtube" type="yt" insight="8239" subtitle="SUBSCRIBERS" upgrowth="-144"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm title-middle d-flex justify-content-start align-items-start">
              Overview - Today
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <SmallCard  title="Page Views" type="fb" upgrowth="3" value="87"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Likes" type="fb" upgrowth="-2" value="52"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Likes" type="im" upgrowth="2257" value="5462"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Profile Views" type="im" upgrowth="1375" value="52k"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <SmallCard  title="Retweets" type="tw" upgrowth="303" value="117"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Likes" type="tw" upgrowth="553" value="507"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Likes" type="yt" upgrowth="-19" value="107"/>
            </div>
            <div className="col-sm-3">
              <SmallCard  title="Total Views" type="yt" upgrowth="-12" value="1407"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col footer">
              Challenge by <a href="https://www.frontendmentor.io">Frontmentor.io</a>. Coded by <a href="https://github.com/JSinahy">Jose Sinahy</a>
            </div>
          </div>
        </div>
      </header>    
    );
  }
  
}

