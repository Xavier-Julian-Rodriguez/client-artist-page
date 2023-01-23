import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React from 'react';
import Reels from './Pages/Reels/Reels';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';
import Headshots from './Pages/Headshots/Headshots';

const App = React.memo(() => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Homepage />  
            </Route>
            <Route exact path='/Resume'>
              <Resume />
            </Route>
            <Route path='/Reels'>
              <Reels />  
            </Route>
            <Route exact path='/Headshots'>
              <Headshots />
            </Route>
            <Route path='/Contact'>
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
})

export default App;
