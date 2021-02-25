import React, { Component } from 'react';
import CountrySidebarList from './Components/CountrySidebarList';
import CountryDetails from './Components/CountryDetails';
import Navbar from './Components/Navbar';
import countries from './countries.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    countriesList: countries,
  };

  render() {
    return (
      <Router>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <CountrySidebarList countries={this.state.countriesList} />
          <Switch>
            <Route exact path="/details/:id" component={CountryDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}
