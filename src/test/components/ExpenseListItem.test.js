import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import toJSON, { toJson } from 'enzyme-to-json';

test('should render Expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})