import React from "react";
import "./Post.css";

export function Post(props) {
  const { name, photo, nickname } = props.author;

  return (
    <div className="container">
      <div className="post-component">
        <div className="info-author">
          <div>
            <img className="avatar" src={photo} alt="avatar"></img>
          </div>
          <div className="name-author">
            <p className="name">{name}</p>
            <p className="nickname">{nickname}</p>
            <p className="date-p">{props.date}</p>
          </div>
        </div>

        <div className="context">
          <p>{props.content}</p>
          <div>
            <img className="image" src={props.image} alt="pic"></img>
          </div>
          <div className="likes">
            <div>
              <img
                className="icon"
                src="https://www.svgrepo.com/show/243931/like-thumb-up.svg"
                alt="like"
              ></img>
              <span>{props.like}</span>
            </div>
            <div>
              <img
                className="icon"
                src="https://img.icons8.com/ios/344/comments.png"
                alt="comment"
              ></img>
              <span>{props.comment}</span>
            </div>
            <div>
              <img
                className="icon"
                src="https://img.icons8.com/office/344/share.png"
                alt="share"
              ></img>
              <span>{props.share}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
