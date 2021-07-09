import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ApolloProvider, } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import PetList from './components/PetList';
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
  uri: '/graphql'
});

function App() {

  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);

  const handleCreateOpen = () => {
    setCreateAccountOpen(true);
  };
  const handleCreateClose = () => {
    setCreateAccountOpen(false);
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/petlist" component={PetList} />
            </Switch>
            <Footer />
          </SharedContext.Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
