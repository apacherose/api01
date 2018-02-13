const node_routes = require('./node_routes');

module.exports = function(app) {
    node_routes(app);
};