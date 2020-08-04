// ------------- Object Destructuring ------------------

/* const person = {
    name: 'Sarvang Jain',
    age: 20,
    location: {
        city: 'Jaipur',
        temp: 35
    }
}

const {name, age} = person;

console.log(`${name} is ${age}.`);

const {city, temp} = person.location;

if(city && temp){
    console.log(`It's ${temp} in ${city}`);
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self Publish'} = book.publisher;

console.log(publisherName);

 */
// ------------- Array Destructuring ------------------

const address = ['1299 S Wall Street', ' York', 'USA', '123412'];

const [, city1, state = 'Rajasthan'] = address;

console.log(`You are in ${city1}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, small, med, large ] = item;

console.log(`A medium ${name} costs ${med}`);