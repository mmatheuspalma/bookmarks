import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Bookmarks from './Bookmarks';

import 'assets/styles/style.css';

export default class Routes extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path='/' component={Bookmarks} />
               <Route path='*' component={() => <div> Página não encontrada </div>} />
            </Switch>
         </BrowserRouter>
      );
   }
}
