import { ExpenseList } from '../../components/ExpenseList';
import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import toJSON, { toJson } from 'enzyme-to-json';

test('should render ExpenseList with expense', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
