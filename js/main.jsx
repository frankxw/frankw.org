'use strict';

var React                   = require("react"),
    Router                  = require("react-router"),
    Route                   = Router.Route,
    RouteHandler            = Router.RouteHandler,
    DefaultRoute            = Router.DefaultRoute,
    NotFoundRoute           = Router.NotFoundRoute,
    AppRoot                 = require('./AppRoot.jsx'),
    Professional            = require('./Professional.jsx');

var NotFound = React.createClass({
    render: function() {
        return (
            <div className="not-found">
                <h1>Not Found <span className="fa fa-meh-o"></span></h1>
            </div>
        )
    }
});

var routes = (
    <Route name="home" path="/" handler={AppRoot}>

        <DefaultRoute handler={Professional}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Root) {
    React.render(<Root/>, document.getElementById("react-root"));
});
