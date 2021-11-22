
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navbars from './components/Home/Navbars/Navbars';
import AuthProvider from './components/AuthProvider.js/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Dashboards from './Dashboards/Dashboards/Dashboards';
import Explores from './components/Home/Explores/Explores';
import Reviews from './components/Home/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import News from './components/Home/News/News';
import Success from './Dashboards/MyOrders/Success';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbars></Navbars>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/dashboards">
              <Dashboards></Dashboards>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/success">
              <Success></Success>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
