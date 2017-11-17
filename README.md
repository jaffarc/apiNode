# API NODEJS PATTERNS



## About connecting to all dbs

create all the connection to the database and leave all as exports

API consult exemple:

```js
{
    method: 'GET',
    url: 'http://localhost:5000/list/user',
     requestHeader: {
        'content-type': 'application/json',
        'Accept-Language': 'br'
    },
}
```