# Connection of the databases

Here you will have all the connection of the databases

## About connecting to all dbs

create all the connection to the database and leave all as exports

Modules exemple:

```js
exports.dblog = (app) => {
    try {

    db.createConnection(mongoUrl, { keepAlive: 300000, connectTimeoutMS: 30000, useMongoClient: true });
    } catch (error) {
        console.log('db', error);
        throw error;
    }
    
};
```