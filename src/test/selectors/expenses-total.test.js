import ExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for no expenses', () => {
    const sum = ExpensesTotal([]);
    expect(sum).toBe(0);
});

test('should return sum of one expense', () => {
    const sum = ExpensesTotal([expenses[0]]);
    expect(sum).toBe(expenses[0].amount);
});

test('should return sum of the total expenses', () => {
    const sum = ExpensesTotal(expenses);
    expect(sum).toBe(267595);
});