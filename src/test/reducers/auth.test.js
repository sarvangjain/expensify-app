import authReducer from '../../reducers/auth';

test('should set up default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});


test('should add uid while dipatching login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123123123'
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid: action.uid });
});


test('should remove uid while dipatching logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
});