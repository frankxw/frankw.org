'use strict';

var React = require("react"),
    Bootstrap = require("react-bootstrap"),
    PageHeader = Bootstrap.PageHeader,
    Well = Bootstrap.Well;

var Professional = React.createClass({
    render: function() {
        return (
            <div className="professional">
                <div className="coming-soon">Coming Soon...</div>
            </div>
        );
    }
});

module.exports = Professional;
