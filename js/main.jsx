'use strict';

var React           = require("react"),
    Router          = require("react-router"),
    Route           = Router.Route,
    RouteHandler    = Router.RouteHandler,
    DefaultRoute    = Router.DefaultRoute,
    NotFoundRoute   = Router.NotFoundRoute,
    AppRoot         = require('./AppRoot.jsx'),
    Works           = require('./Works.jsx'),
    Author          = require('./data/Author.jsx'),
    MHESims         = require('./data/MHESims.jsx'),
    Editors         = require('./data/Editors.jsx'),
    SmallGames      = require('./data/SmallGames.jsx'),
    GCW             = require('./data/GCW.jsx');

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
        <Route name="author" path="/author" handler={Author}/>
        <Route name="mhesims" path="/mhesims" handler={MHESims}/>
        <Route name="editors" path="/editors" handler={Editors}/>
        <Route name="games" path="/games" handler={SmallGames}/>
        <Route name="gcw" path="/gcw" handler={GCW}/>

        <DefaultRoute handler={Works}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Root) {
    React.render(<Root/>, document.getElementById("react-root"));
});
