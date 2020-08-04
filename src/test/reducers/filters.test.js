import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'abc' });
    expect(state.text).toBe('abc');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: 999999 });
    expect(state.startDate).toBe(999999);
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: 9999999 });
    expect(state.endDate).toBe(9999999);
});