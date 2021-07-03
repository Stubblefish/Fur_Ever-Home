import { CssBaseline } from '@material-ui/core';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
