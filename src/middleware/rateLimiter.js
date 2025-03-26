const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    headers: true, // Send rate limit header information
    handler: (req, res) => {
        res.set('Retry-After', Math.ceil(req.rateLimit.resetTime - Date.now() / 1000));
        res.status(429).json({
            message: 'Too many requests from this IP, please try again later.',
            retryAfter: Math.ceil(req.rateLimit.resetTime - Date.now() / 1000)
        });
    }
});

module.exports = rateLimiter;