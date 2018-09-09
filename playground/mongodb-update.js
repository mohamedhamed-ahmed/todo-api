const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, db) => {
        if (err) {
            return console.log('An error occured while connceting to the DB');
        }

        console.log('Connected to DB successfully');

        db.collection('Users').findOneAndUpdate({ _id: new ObjectId('5b950756892ead7cd7f24434') },
            {
                $set: {
                    name: 'Mohamed'
                },
                $inc:
                {
                    age: 2
                }
            },
            {
                returnOriginal:false
            }).then((result) => {
                console.log('Users', JSON.stringify(result, undefined, 2));
            });

        //db.close();
    });