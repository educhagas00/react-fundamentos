import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.module.scss'; // importando o css global

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // cria a raiz do React a partir do id root lá no index.html da pasta public

// renderiza o conteúdo na raiz
root.render(
<App />
);