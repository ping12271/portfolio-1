import React from 'react';
import  ReactDom from 'react-dom';
import './styled/Utill.Styled';
import {BrowserRouter} from 'react-router-dom';

import App from './views/App';

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)