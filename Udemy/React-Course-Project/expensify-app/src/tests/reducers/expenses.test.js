import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state',()=>{
const state= expensesReducer(undefined,{type:'@@INIT'});
expect(state).toEqual([])
})

test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
    })
test('should not remove expenses if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state= expensesReducer(expenses,action);
    expect(state).toEqual(expenses)

})    
test('should  add expenses ',()=>{
    const extra = {
    id:'4',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:moment(0)
}
    const action = {
        type:'ADD_EXPENSE',
        expense:extra
    }
    
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2],extra])

})  
test('should  edit expenses ',()=>{
    const extra = {
        
        description:'Renttt'

}
    const action = {
        type:'EDIT_EXPENSE',
        id:'2',
        updates:extra
    }
    
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],{...expenses[1],description:'Renttt'},expenses[2]])

})
test('should  not edit expenses  if id not found',()=>{
    const extra = {
        
        description:'Renttt'

}
    const action = {
        type:'EDIT_EXPENSE',
        id:'6',
        updates:extra
    }
    
    const state= expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])

})