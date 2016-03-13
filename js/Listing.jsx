'use strict';

var React       = require("react"),
    Router      = require("react-router"),
    Navigation  = Router.Navigation,
    Bootstrap   = require("react-bootstrap"),
    Button      = Bootstrap.Button;

var Listing = React.createClass({
    mixins: [Navigation],

    onClickMore: function(link) {
        this.transitionTo(link);
    },

    render: function() {
        var sideClass = this.props.left ? 'left' : 'right';

        var icon = (
            <div className="icon">
                <img src={this.props.data.img}/>
            </div>
        );

        var button;
        if(this.props.data.url) {
            button = (
                <a href={this.props.data.url} className="btn btn-info" target="_blank">{this.props.data.buttonText || 'More'} <span className="fa fa-external-link"></span></a>
            );
        }
        else if(this.props.data.link) {
            button = (
                <Button bsStyle="info" onClick={this.onClickMore.bind(null, this.props.data.link)}>{this.props.data.buttonText || 'More'} <span className="fa fa-external-link"></span></Button>
            );
        }

        var text = (
            <div className="content">
                <div className="title">{this.props.data.title}</div>
                <div className="text">{this.props.data.text}</div>
                <div className="button">
                    {button}
                </div>
            </div>
        );

        var left, right;
        if(this.props.left) {
            left = icon;
            right = text;
        }
        else {
            left = text;
            right = icon;
        }

        return (
            <div className={"listing " + sideClass}>
                <div className="bg"></div>
                {left}{right}
            </div>
        );
    }
});

module.exports = Listing;
