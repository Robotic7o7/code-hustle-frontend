import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/nav/nav';
import LandingPage from './pages/landing-page/landing-page';
import LoginPage from './pages/login-page/login-page';
import BidPage from './pages/bid-page/bid';
import LeaderBoard from './pages/leader-board/leader-board';
import LockedPage from './pages/locked-page/locked';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [wallet, setWallet] = useState('');

  return (
    <div className="App">
      <Router>
        <Nav
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          displayName={displayName}
          wallet={wallet}
          setWallet={setWallet}
        />
        <Switch>
          <Route path="/home">
            <LandingPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              displayName={displayName}
              wallet={wallet}
              setWallet={setWallet}
            />
          </Route>
          <Route path="/bid">
            <BidPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              displayName={displayName}
              wallet={wallet}
              setWallet={setWallet}
            />
          </Route>
          <Route exact path="/">
            <LoginPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}

              setDisplayName={setDisplayName}
            />
          </Route>
          <Route exact path="/login">
            <LoginPage
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}

              setDisplayName={setDisplayName}
            />
          </Route>
          <Route path="/leader-board">
            <LeaderBoard
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}

              setDisplayName={setDisplayName}
            />
          </Route>
          <Route path="/locked">
            <LockedPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
