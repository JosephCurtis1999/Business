import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

const card = document.querySelector('.card__inner');

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});