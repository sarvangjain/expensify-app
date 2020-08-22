

database.ref('notes/-MF0KjV34xf01yWOe1ff').remove();


database.ref('notes').push({
    title: 'course topics',
    body: 'react native, angular'
});

const firebaseNotes = {
    notes: {
        sadklas: {
            body: 'this is my note',
            title: 'first'
        },
        safasff: {
            body: 'this is my note',
            title: 'second'     
        },
    }
}

const notes = [{
    id: '12',
    body: 'this is my note',
    title: 'first'
}, {
    id: '12231',
    body: 'this is my note',
    title: 'second'
}];

database.ref('notes').set(notes);



const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
}, (e) => {
    console.log(e);
})

setTimeout(() => {
    database.ref().update({
        name: 'Sarvang'
    })
}, 3000);

database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch(() => {

    });

database.ref().set({
    name: 'Sarvang Jain',
    job: {
        title: 'Developer',
        company: 'Google'
    },
    age: 20,
    stressLevel: 6,
    location: {
        city: 'Jaipur',
        country: 'India'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref().update({ 
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Benngaluru'
});



database.ref().remove().
then(() => {
    console.log('isSingle attribute removed');
}).catch((e) => {
    console.log('error: ', e);
});






/* database.ref('expenses')
  .once('value')
  .then((snapshot) =>{
    const expenses = [];
    snapshot.forEach((expense) => {
        expenses.push({
            id: expense.key,
            ...expense.val()
        })
    });
    console.log(expenses);
  });
 */

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
/* 
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});
 */

database.ref('expenses').push({
    description: 'Gas Bill',
    note: 'feb',
    amount: 222,
    createdAt: 214124
});

