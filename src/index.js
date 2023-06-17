import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Route  } from 'react-router-dom';
makeServer()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route>
    <App />
    </Route>
  </React.StrictMode>
);



