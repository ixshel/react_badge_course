// const element = document.createElement('h1');
// element.innerHTML = 'Hello, Platzi';

// const container = document.getElementById('app');
// container.appendChild(element);

// const element = React.createElement('a', { href: 'https://platzu.com' }, 'Ir a Platzi')
// const element = React.createElement(
//     'h1', {}, `Hola soy ${name}`
// );

import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

// Components
import App from './components/App';
// import BadgeNew from './components/pages/Badgenew';
// import Badges from './components/pages/Badges'

const container = document.getElementById('app');

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(
    // <BadgeNew />
    // <Badges />
    <App />
    , container);