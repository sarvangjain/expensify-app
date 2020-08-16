import {connect} from 'react-redux';
import SelectExpensesTotal from '../selectors/expenses-total';
import SelectExpenses from '../selectors/expenses';
import React from 'react';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.count > 0 ? 
            <p>
                Viewing {props.count} 
                {props.count === 1 ?  ' expense ' : ' expenses '} 
                with total expenditure of {numeral(props.total/100).format('$0,0.00')}
            </p>
            : 
                <p>
                Viewing 0 expenses
            </p>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters),
        total: SelectExpensesTotal(SelectExpenses(state.expenses, state.filters)),
        count: SelectExpenses(state.expenses, state.filters).length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);