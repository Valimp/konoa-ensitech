const log = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();  // Poursuit vers le middleware suivant
};

module.exports = log;