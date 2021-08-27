import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  About, Home, Error404, MoviePage,
} from './pages';
import Nav from './components/Nav/Nav';
import './App.scss';
import { getMovieSaga } from './redux/actions/movieActions';

const App = ({ getMovie, loading }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('app!', loading, getMovie);
    getMovie('333');
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className="container">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={MoviePage} />
        <Route path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.movies.loading,
});

const mapDispatchToProps = {
  getMovie: getMovieSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
