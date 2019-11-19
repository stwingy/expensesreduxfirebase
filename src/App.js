import React from 'react';
import Fb from './firebase/Fb'

import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { Provider } from "react-redux";

const middlewares = [ thunk];
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(...middlewares)));


function App() {
  return (
<Provider store={store}>
    <Fb />
</Provider>
  );
}

export default App;
