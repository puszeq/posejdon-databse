import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import BookContextProvider from './contexts/BookContext'; // remove
import { AuthProvider } from "contexts/Auth";

import Navbar from 'components/Navbar';
import Dashboard from 'components/Dashboard';
import About from 'components/About';
import Contact from 'components/Contact';
import Login from "components/Login";
import SignUp from "components/SignUp";
import PrivateRoute from "components/PrivateRoute";

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/about' component={About} />
        <PrivateRoute path='/contact' component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;