const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, db) => {
        if (err) {
            return console.log('An error occured while connceting to the DB');
        }

        console.log('Connected to DB successfully');

        db.collection('Users').find({name:'Mohamed Hamed'}).toArray().then((docs) => {
            console.log('Users', JSON.stringify(docs, undefined, 2));
        });

        db.close();
    });