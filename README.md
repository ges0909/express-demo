# Express

## Setup (manual)

```bash
mkdir express-demo
cd express-demo
yarn init
yarn add express
code . &
```

Edit file `app.js`.

```js
let express = require('express')
let app = express()

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

app.get(/*path*/ '/', /*callback*/ function(req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
})
```

## Scaffolding

```bash
yarn global add express-generator
```

```bash
express --view=pug express-demo
cd express-demo
yarn install
DEBUG=express-demo:* yarn start
```

Navigate to `http://localhost:3000/`.

## 

```bash
yarn add nodemon --dev
```
