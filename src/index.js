import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
// import About from './components/About';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
