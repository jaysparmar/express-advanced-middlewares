module.exports = {
    logger: require('./middleware/logger'),
    validator: require('./middleware/validator'),
    rateLimiter: require('./middleware/rateLimiter'),
    cors: require('./middleware/cors'),
    compression: require('./middleware/compression'),
    helmet: require('./middleware/helmet'),
    errorHandler: require('./middleware/errorHandler')
};