import React from 'react';
import {Route, Switch , Redirect} from 'react-router-dom';
import Movies from './components/movies';
import './App.css';
import NavBar from './components/common/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import MovieForm from './components/movieForm';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
    <main className = "container">
      <Switch>
      <Route path='/movies/:id' component={MovieForm}/>
      <Route path='/movies' component={Movies}/>
      <Route path='/customers' component={Customers}/>
      <Route path='/rentals' component={Rentals}/>
      <Route path="/not-found" component={NotFound}/>
      <Redirect from='/' to='/movies' exact/>
      <Redirect to="/not-found"/>
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;