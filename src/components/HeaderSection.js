import React, { Component } from "react";
import { FaBolt, FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { Card, CardTitle, Button, Col, Row, Switch, Icon } from "react-materialize";

import {
  firstName,
  lastName,
  title,
  bio,
  selfie,
  links,
  userIcons,
  darkModeSwitch
} from "../ProfileInformation";
import "../App.css";


let darkStyle = {
  color: 'white',
  backgroundColor: 'black',
};

class HeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
  }






  render() {




    let darkModeStyle = this.state.darkMode ?
      darkStyle : {};


    return (
      <div className="HeaderSection" style={darkModeStyle}>
        {darkModeSwitch ? (
          <div className="Switch">
            <Switch onChange={() => { this.setState({ darkMode: !this.state.darkMode }) }} offLabel='' onLabel='' />
          </div>
        ) : <div></div>}
        <div className="HS-Selfie-and-Name">
          <img src={selfie} className="HS-Selfie" alt="selfie" />
          <div className="HS-Name-Title-Block">
            <h1 className="HS-Name"  >
              {firstName} {lastName}
            </h1>
            <h2 className="HS-Title"> {title} </h2>
          </div>
        </div>
        <p className="HS-Bio" > {bio} </p>
        <div className="HS-Links">

          {links.map(function (item, index) {
            return (
              <a key={index} href={item.link}>
                {!userIcons ? (
                  item.name
                ) : item.icon ? (
                  <item.icon className="link-icon" />
                ) : (
                      <FaBolt className="link-icon" />
                    )}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HeaderSection;
