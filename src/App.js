import React, { useState } from 'react';
import Routes from './components/Routes';
import { AppContext } from './app-context';
import { getLoggedUser } from './utils/userUtils';
import { USER_CONTANTS } from './constants/userContants';
import Navigation from './components/navigation/Navigation';
import logo from './logo.svg';
import './styles/App.css';

const App = () => {

  const [loggedUser, setLoggedUser] = useState(getLoggedUser());
  const updateLoggedUser = user => {
    localStorage.setItem(USER_CONTANTS.LOGGED_USER, user);
    setLoggedUser(user);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppContext.Provider value={{ loggedUser, updateLoggedUser }}>
        <Navigation />
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;