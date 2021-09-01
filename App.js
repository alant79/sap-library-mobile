import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import dataReducers from './store/reducers/data';
import MainComponent from './components/MainComponent';
const rootReducer = combineReducers({
  sapData: dataReducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
     <MainComponent/>
    </Provider>
  );
}
