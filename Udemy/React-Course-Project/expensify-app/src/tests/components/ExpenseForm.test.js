import React from "react";
import {shallow} from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseForm with expense data',()=>{
    const state=expenses[1]
    const wrapper = shallow(<ExpenseForm expense={state}/>)
    expect(wrapper).toMatchSnapshot()
})
// ERROR HERE with state funciton 
test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: () =>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
});
test('should set description on input change',()=>{
    const value='New description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
})
test('should set note on input change',()=>{
    const value='New note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})
test('should set amount on input change',()=>{
    const value='15.00'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
})
test('should no set amount on input change',()=>{
    const value='1445.0000'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})
test('shoudl call onSubmit prop for valid form submision',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: 0
    });
});
test('should set new date on date change',()=>{
    const now = moment();
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);

})
test('should set value on focus change',()=>{
    const focused = {focused:true}
    const wrapper=shallow(<ExpenseForm  />) ;
    wrapper.find('SingleDatePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calenderFocused')).toBe(true);


})