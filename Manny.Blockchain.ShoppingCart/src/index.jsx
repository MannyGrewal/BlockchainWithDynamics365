import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import shoppingCartStore from './Store'
import Main from './CRM Blockchain/Main';


render(<Provider store={shoppingCartStore}>
            <Main />
            </Provider>, document.getElementById('mainContainer'));

