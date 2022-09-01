import { Component } from "react";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import "./Gallery.css";

export class Gallery extends Component {
  render() {
    return (
      <div className="box">
        <div className="gallery">
          <img className="img" src={img1}></img>
          <img className="img" src={img2}></img>
          <img className="img" src={img3}></img>
          <img className="img" src={img4}></img>
          <img className="img" src={img5}></img>
          <img className="img" src={img6}></img>
          <img className="img" src={img7}></img>
          <img className="img" src={img8}></img>
        </div>
      </div>
    );
  }
}
