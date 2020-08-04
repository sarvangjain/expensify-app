import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 232400,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Water Bill',
    note: '',
    amount: 15000,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '4',
    description: 'Gas Bill',
    note: '',
    amount: 20000,
    createdAt: moment(0).add(2, 'days').valueOf()
}];