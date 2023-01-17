import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import karteIcon from "../../../img/karte.png";
import sucheImg from "../../../img/suche.png";
import alarmImg from "../../../img/alarm.png";
import homeImg from "../../../img/home.png";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to="/" data-testid="home-link" className="link">
          <img src={homeImg} alt="home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/karte" data-testid="map-link" className="link">
          <img src={karteIcon} alt="karte" />
          <span>Karte</span>
        </NavLink>
        <NavLink to="/suche" data-testid="search-link" className="link">
          <img src={sucheImg} alt="suche" />
          Suche
        </NavLink>
        <NavLink to="/alarm" data-testid="alarm-link" className="link">
          <img src={alarmImg} alt="karte" />
          Alarm
        </NavLink>
      </div>
    );
  }
}

export { Navigation };
