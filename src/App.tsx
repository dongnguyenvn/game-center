import './App.css';
import Home from './pages';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import GlobalStyles from './components/GlobalStyles';
import Game from './pages/Game';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game/:id">
            <Game />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
