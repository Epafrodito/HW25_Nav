import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { Phonebook } from "./components/Phonebook/Phonebook";
import { AuthorPost } from "./components/Post/AuthorPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/post" component={AuthorPost} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/phonebook" component={Phonebook} />
      </Router>
    </div>
  );
}

export default App;
