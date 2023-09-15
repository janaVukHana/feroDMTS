import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'

import { ContextProvider } from './context/ContextProvider';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);



