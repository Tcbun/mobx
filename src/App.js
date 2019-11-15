import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
// import Page1 from './pages/page1';
import store from './store';

let App = observer(({ appState }) => {
  return (
    <div className="App">
      {/* <Page1 /> */}
      {store.timer}
    </div>
  );
});

export default App;
