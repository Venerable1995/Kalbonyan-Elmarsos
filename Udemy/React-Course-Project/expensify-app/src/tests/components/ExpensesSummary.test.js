import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should view totalling of 1 item',()=>{
const res = shallow( <ExpensesSummary expenses={expenses} />)
expect(res).toMatchSnapshot();
})