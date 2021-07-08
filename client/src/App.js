import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import PetList from './components/PetList';
import SharedContext from './components/SharedContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
