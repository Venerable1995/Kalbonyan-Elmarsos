import moment from 'moment';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';

test('should generate set start date action object',()=>{
const action = setStartDate(moment(0))
expect(action).toEqual({
    type:'SET_START_DATE',
    date:moment(0)
})
})
test('should generate set end date action object',()=>{
const action =setEndDate(moment(0))
expect(action).toEqual({
    type:'SET_END_DATE',
    date:moment(0)
})
})
test('should generate setTextFilter',()=>{
const action =setTextFilter('text');
expect(action).toEqual({
    type:'SET_TEXT',
    text:'text'
})
})
test('should generate default value setTextFilter',()=>{
    const action =setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT',
        text:''
    })
})
test('should generate sortByAmount',()=>{
const action= sortByAmount()
expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
})
})
test('should generate sortByDate',()=>{
    const action= sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})
