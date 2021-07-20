
import HomePages from "./pages/HomePages";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Login from "./pages/Login";
import Sales from "./pages/Sales";
import Cart from "./pages/Cart";
import Header from "./Сomponents/Header";
import Footer from "./Сomponents/Footer";
import CardMenu from "./pages/menu.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route exact path='/' component={HomePages}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/sales' component={Sales}/>
                <Route exact path='/cart' component={Cart}/>
                <Route path="/:categoryName" component={CardMenu} exact/>
            </Switch>

        </Router>
    </>
  );
}

export default App;
