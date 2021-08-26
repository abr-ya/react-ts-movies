import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getMovieSaga } from './redux/actions/movieActions';

const App = ({getMovie, loading}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('app!', loading, getMovie);
    getMovie('333');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Hello Vite + React + TS + ESLint (Airbnb)!</p>
        <p>
          <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
            Add 1 to counter
          </button>
        </p>
        <p>
          Counter value is:
          {' '}
          {count}
        </p>
        <p>Edit *.tsx files and save to test HMR updates.</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
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
