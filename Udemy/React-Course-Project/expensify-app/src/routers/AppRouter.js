import React from 'react';
import {BrowserRouter,Route ,Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import  AddExpensePage from '../components/AddExpensePage';
import helpPage from '../components/helpPage';
import EditPage from '../components/EditPage';
import history from '../components/history';
import notFoundPage from '../components/notFoundPage';
import Header from '../components/Header';

const AppRouter=()=>(
    <BrowserRouter>
     <div>
      <Header/>
      <Switch> 
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/help" component={helpPage}/>
        <Route path="/edit/:id" component={EditPage}/>
        <Route path="/history" component={history}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route component={notFoundPage}/>
      </Switch>
     </div>
    </BrowserRouter>
)
export default AppRouter;