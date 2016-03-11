'use strict';

var React                   = require("react"),
    Router                  = require("react-router"),
    RouteHandler            = Router.RouteHandler,
    Header                  = require('./Header.jsx');

var AppRoot = React.createClass({
    render: function() {
        return (
            <div className="app-root">
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = AppRoot;
