import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Style.css";
import Home from "./Home";
import userLogin from "./components/userLogin";
import adminLogin from "./components/adminLogin";
import userRegistration from "./components/userRegistration";

function App() {
  return (
    <Router>
      <h1>A Simple Ecommerce Website Created Using MERN Stack</h1>
      <center>
        <i className="fab fa-x fa-react fa-spin fa-5x"></i>
      </center>
      <div className="section-margin">
        <Route path="/" exact component={Home} />
        <Route path="/adminLogin" component={adminLogin} />
        <Route path="/userLogin" component={userLogin} />
        <Route path="/userRegistration" component={userRegistration} />
      </div>
      <footer>
        <p>Created and designed by Dibin Jose</p>
      </footer>
    </Router>
  );
}

export default App;
