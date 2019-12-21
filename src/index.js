// https://github.com/techhtml/2019-12-21-pwa-workshop
// https://github.com/devkimchi/pwa-workshop/tree/master/docs?ocid=aid2423443_ThankYou_DevComm&eventId=Handson!PWA+Azureworkshop_VR0gwk8lVx0W

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="app">Hello Azure world</div>;

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
