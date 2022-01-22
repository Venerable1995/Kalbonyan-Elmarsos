import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary= (props)=>(
    <div>
   { props.expenses.length === 0 ? (<div/>) 
    :
    <h1>  
      Viewing {props.expenses.length} Expense Totalling : { props.expenses.map((expense)=>expense.amount).reduce(( sum , value )=> sum + value /100, 0)}     
    </h1>
    }
    </div>
)

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummary);
  