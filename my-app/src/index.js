import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { HashRouter, Route, Router } from 'react-router-dom';
import { composeWithDevTools } from  'redux-devtools-extension';
import thunk from 'redux-thunk';


import App from './containers/App/App';
import Catalogue from './containers/Catalogue/Catalogue';
import Todo from './containers/Todo'
import ItemPage from './containers/ItemPage'
import AddNewItem from './components/AddNewItem/AddNewItem'

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
/*const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/

console.log(store.getState());

render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={App}/>
      <Route path="/catalogue" component={Catalogue}></Route>
      <Route path="/todo" component={Todo}></Route>
      <Route exact path="/catalogItem/:itemId" component={ItemPage}></Route>
      <Route path="/create_new_item" component={AddNewItem}></Route>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);



