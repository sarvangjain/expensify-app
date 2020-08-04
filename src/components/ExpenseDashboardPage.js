import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseListFilter from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
