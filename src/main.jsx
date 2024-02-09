import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'
import store from './components/Redux/store'
import './index.css';


const rootElement = document.getElementById('root');
const rootThem = document.getElementsByClassName('rootThem');


createRoot(rootElement).render(
  
  <React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>

  </React.StrictMode>
);

