import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import App from '@/components/app';
import store from '@/redux/store';
// import App from './components/app';

const Root = () => (
  <>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

ReactDOM.render(<Root />, document.getElementById('app'));
