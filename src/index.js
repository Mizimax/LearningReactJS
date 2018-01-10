import React from 'react';
import { render } from 'react-dom';

import Routes from './router';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Routes />
  </div>
);

render(<App />, document.getElementById('root'));
