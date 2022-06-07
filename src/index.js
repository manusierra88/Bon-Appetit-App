import React from 'react';

import { store } from './features/store/store';




import ReactDOM from 'react-dom/client';
import { BonAppetit } from './BonAppetit';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BonAppetit />
    </Provider>
);

