import { Component } from "react";
import code from "./code.png";
import "./HomePage.css";

export class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text-react">
          <h1>React</h1>
          <h3>What Are We Building?</h3>
          <p>
            In this tutorial, we’ll show how to build an interactive tic-tac-toe
            game with React.
          </p>
          <p>
            You can see what we’ll be building here: Final Result. If the code
            doesn’t make sense to you, or if you are unfamiliar with the code’s
            syntax, don’t worry! The goal of this tutorial is to help you
            understand React and its syntax.
          </p>
          <p>
            We recommend that you check out the tic-tac-toe game before
            continuing with the tutorial. One of the features that you’ll notice
            is that there is a numbered list to the right of the game’s board.
            This list gives you a history of all of the moves that have occurred
            in the game, and it is updated as the game progresses.
          </p>
          <p>
            You can close the tic-tac-toe game once you’re familiar with it.
            We’ll be starting from a simpler template in this tutorial. Our next
            step is to set you up so that you can start building the game.
          </p>
        </div>
        <img className="home-page-img" src={code} />
      </div>
    );
  }
}
