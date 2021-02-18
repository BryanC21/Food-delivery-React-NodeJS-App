import "./css/App.css";
import "./css/index.css";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import Home from "./pages/Home/Home";
import BC from "./pages/AboutTeam/BryanCaldera";
import CT from "./pages/AboutTeam/CalvinTan";
import DF from "./pages/AboutTeam/DennyFeng";
import HN from "./pages/AboutTeam/HuanNguyen";
import JT from "./pages/AboutTeam/JohnTo";
import MM from "./pages/AboutTeam/MarcoMarino";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App-content'>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about/BryanCaldera' component={BC} />
            <Route exact path='/about/CalvinTan' component={CT} />
            <Route exact path='/about/DennyFeng' component={DF} />
            <Route exact path='/about/HuanNguyen' component={HN} />
            <Route exact path='/about/JohnTo' component={JT} />
            <Route exact path='/about/MarcoMarino' component={MM} />
          </Switch>
        </div>
        <Route path='/' component={Footer} />
      </div>
    </Router>
  );
}

export default App;