import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Home } from './Home';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
)
