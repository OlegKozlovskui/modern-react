import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';

import FormikComponent from './FormikComponent';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <FormikComponent />
    </div>
  </Provider>
);

export default App;
