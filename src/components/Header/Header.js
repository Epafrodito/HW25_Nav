import { Component } from "react";
import logo from "./logo.png";
import "./Header.css";
import { Nav } from "../Nav/Nav";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>HW#25</h1>
          <h2>ReactJS. Поняття SPA. Навігація</h2>
          <img className="header-logo" src={logo} />
        </div>
        <Nav />
      </div>
    );
  }
}
