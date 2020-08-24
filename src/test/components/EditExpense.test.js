import {shallow} from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, startRemoveExpense, history;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history}
        expense={expenses[2]}
    />);
})

test('should render EditExpensePage', () =>{
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});