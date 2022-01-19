import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')

    })
})
test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should set sort by date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('should set text',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'date'
    }
    const action = {type:'SET_TEXT',
                    text:'rent'}
    const state = filtersReducer(currentState,action)
    expect(state.text).toBe('rent')
})
test('should set sort by date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {type:'SET_START_DATE',
                    date:moment(0)}
    const state = filtersReducer(currentState,action)
    expect(state.startDate).toEqual(moment(0))
})
test('should set sort by date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = {type:'SET_END_DATE',
                    date:moment(0)}
    const state = filtersReducer(currentState,action)
    expect(state.endDate).toEqual(moment(0))
})
//should set text filter
// should set startDate filter
//should set endDate filter