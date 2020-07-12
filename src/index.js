import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Store from './contexts/Store'


const render = 
<Store>
    <Router>
        <App/>
    </Router>
</Store>

ReactDOM.render(render, document.getElementById('root'));
