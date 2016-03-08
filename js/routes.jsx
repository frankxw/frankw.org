'use strict';

var React           = require('react'),
    Router          = require('react-router'),
    Route           = Router.Route,
    NotFoundRoute   = Router.NotFoundRoute,
    DefaultRoute    = Router.DefaultRoute;

var NotFound = React.createClass({
    render: function() {
        return (
            <div className="not-found">
                <h1>Not found :(</h1>
            </div>
        )
    }
});

module.exports.routes = (
    <Route name="home" handler={NotFound} path="/">
        <DefaultRoute handler={NotFound}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);
