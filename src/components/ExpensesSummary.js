import {connect} from 'react-redux';
import SelectExpensesTotal from '../selectors/expenses-total';
import SelectExpenses from '../selectors/expenses';
import React from 'react';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.count > 0 ? 
            <h2>
                Viewing {props.count} 
                {props.count === 1 ?  ' expense ' : ' expenses '} 
                with total expenditure of {numeral(props.total/100).format('$0,0.00')}
            </h2>
            : 
                <h2>
                Viewing 0 expenses
            </h2>
        }
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = SelectExpenses(state.expenses, state.filters);
    return {
        total: SelectExpensesTotal(visibleExpenses),
        count: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);