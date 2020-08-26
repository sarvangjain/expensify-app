import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

// LOGIN TESTS

test('should set up login action', () => {
    const uid = 'asasf1231221';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

// LOGOUT TESTS

test('should set up login action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});