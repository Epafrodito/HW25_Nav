import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <div className="container">
        <ul className="list">
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/post">Post</NavLink>
          </li>
          <li>
            <NavLink to="gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="phonebook">Phonebook</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
