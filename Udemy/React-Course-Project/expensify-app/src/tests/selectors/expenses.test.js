import moment from 'moment';
import SelectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
test('should filter by text value',()=>{
const expense=expenses    
const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
const result = SelectExpenses(expenses,filters);

expect(result).toEqual([expenses[2],expenses[1]])
})
test('should filter by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = SelectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])
})
test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(4,'days')
    }
    const result = SelectExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1]])
})
test('should sort by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    expect(SelectExpenses(expenses,filters)).toEqual([expenses[2],expenses[0],expenses[1]])
})
test('shoudl filter by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    expect(SelectExpenses(expenses,filters)).toEqual([expenses[1],expenses[2],expenses[0]])
})
//should filter by endDate

//should sort by date
//should sort by amount