import React from 'react';
import Nav from '../nav';

const App = ({children}) => (
  <div>
    <Nav />
    <div className="container">
      {children}
    </div>
  </div>
);

export default App;
