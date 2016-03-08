'use strict';

var React           = require('react'),
    Router          = require('react-router'),
    Routes          = require('./routes.jsx'),
    RouterContainer = require('./router_container');

module.exports = {
    getCurrentPath: function() {
        return AppRouter.getCurrentPath();
    },

    makePath: function(to, params, query) {
        return AppRouter.makePath(to, params, query);
    },

    makeHref: function(to, params, query) {
        return AppRouter.makeHref(to, params, query);
    },

    transitionTo: function(to, params, query) {
        AppRouter.transitionTo(to, params, query);
    },

    replaceWith: function(to, params, query) {
        AppRouter.replaceWith(to, params, query);
    },

    goBack: function() {
        AppRouter.goBack();
    },

    run: function(render) {
        AppRouter.run(render);
    }
};

var AppRouter = Router.create({
    routes: Routes.routes,
    location: Router.HistoryLocation
});

RouterContainer.set(AppRouter);
