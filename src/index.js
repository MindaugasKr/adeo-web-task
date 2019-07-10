import 'react-app-polyfill/ie9';
import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import MainPage from './components/pages/main-page';
import MainPageContainer from './components/containers/main';
import IEfallback from './components/fallback/IEfallback';

import './scss/main.scss';

const rootElement = document.getElementById('root');
let content;
// Show fallback message if IE <= 10
if (window.navigator.userAgent.indexOf("MSIE ") > 0) {
  content = (<IEfallback />);
} else {
  const store = configureStore();
  content = (
    <Provider store={store}>
      <MainPageContainer>
        <MainPage />
      </MainPageContainer>
    </Provider>
  );
}

ReactDOM.render(content, rootElement);