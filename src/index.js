import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './router/Routers';

import registerServiceWorker from './registerServiceWorker';


const mountNode = document.getElementById('root');
ReactDOM.render(
    <Root/>,
  mountNode
);
registerServiceWorker();
