import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import './App.css';

// TODO: add routes for various views

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              path={'/profile'}
              component={ProfilePage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;