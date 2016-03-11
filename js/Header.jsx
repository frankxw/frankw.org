'use strict';

var React = require("react");

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <div className="name">Frank Williams</div>
                <div className="links-row">
                    <div className="container">
                        <MoreLink
                            icon="fa fa-github"
                            link="https://github.com/demalus"
                            linkText="demalus"/>
                        <MoreLink
                            icon="fa fa-linkedin-square"
                            link="https://www.linkedin.com/in/frank-williams-600a18a"
                            linkText="frank-williams"/>
                        <MoreLink
                            icon="fa fa-file-text-o"
                            link="/files/frankw_resume.pdf"
                            linkText="resume"/>
                    </div>
                </div>
            </div>
        );
    }
});

var MoreLink = React.createClass({
    render: function() {
        return (
            <div className="item">
                <span className={this.props.icon}></span> <a href={this.props.link}>{this.props.linkText}</a>
            </div>
        );
    }
});

module.exports = Header;
