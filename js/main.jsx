'use strict';

var React       = require('react'),
    AppRouter   = require('./app_router');

AppRouter.run(function(Root) {
  React.render(<Root/>, document.getElementById('react-root'));
});
