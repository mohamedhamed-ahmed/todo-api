const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, db) => {
        if (err) {
            return console.log('An error occured while connceting to the DB');
        }

        console.log('Connected to DB successfully');

        //db.collection('Todos').insertOne({
        //    text: 'Second Todo',
        //    completed: true
        //}, (err, result) => {
        //    if (err) {
        //        return console.log('Unable to add item', err);
        //    }

        //    console.log('Item added successfuly', JSON.stringify(result.ops, undefined, 2));
        //});

        db.collection('Users').insertOne({
            name: 'Mohamed Hamed',
            age: 28,
            location: 'Germany'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to add item', err);
            }

            console.log('Item added successfuly', JSON.stringify(result.ops, undefined, 2));
        });

        db.close();
    });