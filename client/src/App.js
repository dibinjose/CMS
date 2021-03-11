import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Style.css";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
