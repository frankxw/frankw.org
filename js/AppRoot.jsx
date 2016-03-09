'use strict';

var React                   = require("react"),
    Router                  = require("react-router"),
    RouteHandler            = Router.RouteHandler,
    Header                  = require('./Header.jsx');

var AppRoot = React.createClass({
    render: function() {
        return (
            <Header>
                <RouteHandler/>
            </Header>
        );
    }
});

module.exports = AppRoot;
