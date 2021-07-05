import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import SharedContext from './components/SharedContext';

function App() {

  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
    console.log("login form opening")
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
    console.log("login form closing")
  };

  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);

  const handleCreateOpen = () => {
    setCreateAccountOpen(true);
    console.log('create account form opening');
  };
  const handleCreateClose = () => {
    setCreateAccountOpen(false);
    console.log('create account form Closing')
  };

  return (
    <div className="App">
      <CssBaseline />
      <SharedContext.Provider value={{
        handleLoginClose, handleLoginOpen, loginOpen, setLoginOpen,
        createAccountOpen, setCreateAccountOpen, handleCreateOpen, handleCreateClose
      }}>
        <Nav />
        <Home />
        <Footer />
      </SharedContext.Provider>
    </div>
  );
}

export default App;
