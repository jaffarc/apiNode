# API NODEJS PATTERNS
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/763316dc80c84317bd1d8f10423c99a5)](https://www.codacy.com/app/jaffar.cardoso/apiNode?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jaffarc/apiNode&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/jaffarc/apiNode.svg?branch=master)](https://travis-ci.org/jaffarc/apiNode) [![Coverage Status](https://coveralls.io/repos/github/jaffarc/apiNode/badge.svg?branch=master)](https://coveralls.io/github/jaffarc/apiNode?branch=master)


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