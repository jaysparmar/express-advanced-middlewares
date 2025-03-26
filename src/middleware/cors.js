const cors = require('cors');

const corsOptions = {
    origin: '*', // Allow all origins, customize as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;