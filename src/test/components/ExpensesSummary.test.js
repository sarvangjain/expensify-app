import {ExpenseSummary} from '../../components/ExpensesSummary';
import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should handle ExpenseSummary for 0 expenses', () => {
    const wrapper = shallow(<ExpenseSummary count={0} total={0}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle ExpenseSummary for 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary total={195} count={1}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle ExpenseSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary total={5000} count={6}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});