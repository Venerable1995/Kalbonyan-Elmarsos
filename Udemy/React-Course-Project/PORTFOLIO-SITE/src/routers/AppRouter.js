import React from 'react';
import {BrowserRouter,Route ,Switch } from 'react-router-dom';
import notFoundPage from '../components/notFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import EditPage from '../components/EditPage';
import EditItemPage from '../components/Edit-ItemPage';
import ContactPage from '../components/ContactPage';

const AppRouter=()=>(
    <BrowserRouter>
     <div>
      <Header/>
      <Switch> 
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={EditPage} exact={true}/>
        <Route path="/portfolio/:id" component={EditItemPage} exact={true}/>
        <Route path="/Contact" component={ContactPage} />
        <Route component={notFoundPage}/>
      </Switch>
     </div>
    </BrowserRouter>
)
export default AppRouter;