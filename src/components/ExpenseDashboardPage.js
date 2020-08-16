import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
