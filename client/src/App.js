import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Style.css";
import Home from "./Home";
import userLogin from "./userLogin";
import adminLogin from "./adminLogin";
import userRegistration from "./userRegistration";

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/adminLogin" component={adminLogin} />
        <Route path="/userLogin" component={userLogin} />
        <Route path="/userRegistration" component={userRegistration} />
    </Router>
  );
}

export default App;
