import { removeExpense, addExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up add expense action with provided values', () => {
    const expenseData = {
        description: 'test', 
        note: 'testing', 
        amount: 200,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action with defaults', () => {
    const defaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaults,
            id: expect.any(String)
        }
    })
});


test('should set up edit expense action', () => {
    const action = editExpense( '123abc', { description: 'test', note: 'testing', amount: 200})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test', 
            note: 'testing', 
            amount: 200
        }
    })
});