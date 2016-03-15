'use strict';

var React       = require("react"),
    Router      = require("react-router"),
    Navigation  = Router.Navigation,
    Bootstrap   = require("react-bootstrap"),
    Button      = Bootstrap.Button;

var ContentSection = React.createClass({
    mixins: [Navigation],

    goHome: function() {
        this.transitionTo('home');
    },

    render: function() {
        var backButton = (
            <div className="back-button">
                <Button bsStyle="info" onClick={this.goHome}><span className="fa fa-chevron-left"></span> Back</Button>
            </div>
        );

        return (
            <div className="content-section">
                {backButton}
                {this.props.children}
                {backButton}
            </div>
        );
    }
});

module.exports = ContentSection;
