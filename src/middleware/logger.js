const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../../logs/request.log');

const logger = (req, res, next) => {
    const { method, url, headers, body } = req;
    const startTime = Date.now();

    res.on('finish', () => {
        const { statusCode } = res;
        const responseTime = Date.now() - startTime;
        const log = `[${new Date().toISOString()}] ${method} ${url} - Status: ${statusCode} - Headers: ${JSON.stringify(headers)} - Body: ${JSON.stringify(body)} - Response Time: ${responseTime}ms\n`;

        fs.appendFile(logFilePath, log, (err) => {
            if (err) {
                console.error('Failed to write log:', err);
            }
        });
    });

    next();
};

module.exports = logger;