import React from 'react'
import { setup } from 'goober';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import StateProvider from './context/state.tsx';

setup(React.createElement);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
