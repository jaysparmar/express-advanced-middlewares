# express-advanced-middlewares

A collection of advanced middlewares for Express.js applications including logging, request validation, rate limiting, CORS, compression, security headers, and error handling.

## Installation

```bash
npm install express-advanced-middlewares
```

## Usage

### Advanced Logging Middleware

```javascript
const express = require('express');
const { logger } = require('express-advanced-middlewares');

const app = express();

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Request Validation Middleware

```javascript
const express = require('express');
const { validator } = require('express-advanced-middlewares');
const Joi = require('joi');

const app = express();
app.use(express.json());

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required()
});

app.post('/user', validator(schema), (req, res) => {
  res.send('User is valid!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Rate Limiter Middleware

```javascript
const express = require('express');
const { rateLimiter } = require('express-advanced-middlewares');

const app = express();

app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### CORS Middleware

```javascript
const express = require('express');
const { cors } = require('express-advanced-middlewares');

const app = express();

app.use(cors);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Compression Middleware

```javascript
const express = require('express');
const { compression } = require('express-advanced-middlewares');

const app = express();

app.use(compression);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Helmet Middleware

```javascript
const express = require('express');
const { helmet } = require('express-advanced-middlewares');

const app = express();

app.use(helmet);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Error Handling Middleware

```javascript
const express = require('express');
const { errorHandler } = require('express-advanced-middlewares');

const app = express();

app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```