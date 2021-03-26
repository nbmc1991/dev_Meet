import React, { useContext, useEffect } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Store } from './store';

import './App.css';

import Navbar from './components/partials/Navbar';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/pages/Dashboard';

import Header from './components/pages/Header';
import {Container} from '@material-ui/core';
import DevCards from './components/pages/DevCards';


const App = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [ dispatch ]);

  return (
    <div className='App'>
    <BrowserRouter>
          <Container maxWidth='lg' >
          <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <Header/>
          </Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        
          </Container>
    </BrowserRouter>
    </div>

  );
};

export default App;
