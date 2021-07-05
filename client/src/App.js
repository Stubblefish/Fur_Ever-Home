import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import SharedContext from './components/SharedContext';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql',
});

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
    console.log('create account form closing');
  };
  const handleCreateClose = () => {
    setCreateAccountOpen(false);
    console.log('create account form open')
  };

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Router>
        <div>
          <SharedContext.Provider value={{
            handleLoginClose, handleLoginOpen, loginOpen, setLoginOpen,
            createAccountOpen, setCreateAccountOpen, handleCreateOpen, handleCreateClose
          }}>
            <Nav />
            <Home />
            <Footer />
          </SharedContext.Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
