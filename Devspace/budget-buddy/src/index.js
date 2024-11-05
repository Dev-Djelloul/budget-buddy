import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Assurez-vous que le chemin est correct pour `store.js`
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le CSS de Bootstrap
import './styles/styles.css'; // Mettez à jour le chemin en fonction de votre structure de dossier



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
