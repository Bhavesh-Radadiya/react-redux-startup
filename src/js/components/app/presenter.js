import React from 'react';
import AppNav from '../nav';
import { StickyContainer, Sticky } from 'react-sticky';

const App = ({children}) => (
  <StickyContainer>
    <Sticky>
      <AppNav />
    </Sticky>
    <div className="container">
      {children}
    </div>
  </StickyContainer>
);

export default App;