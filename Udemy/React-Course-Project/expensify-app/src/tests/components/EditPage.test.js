import React from "react";
import {shallow} from 'enzyme';
import { EditPage } from "../../components/EditPage";
import expenses from "../fixtures/expenses";
let editExpense ,removeExpense , history,wrapper;
beforeEach(()=>{
    editExpense=jest.fn()
    removeExpense=jest.fn()
    history={push:jest.fn()}
    wrapper=shallow(<EditPage 
         editExpense={editExpense}
         removeExpense={removeExpense}
         history={history}
         expense={expenses[2]} />)
})
test('should render EditPage Correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should handle editExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith("3",expenses[2]);
})
test('should handle onClick',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id:"3"});
})