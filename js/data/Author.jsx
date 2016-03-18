'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var Author = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className="author">
                    <div className="bg"></div>
                    <div>
                        <p>
                            Over the last two years, I have led efforts at Muzzy Lane to write a brand new service that allows instructional designers and subject matter experts to author game-based learning exercises and assessments. The service uses all web-native technologies (HTML5, WebGL, WebSockets) to deliver games in-browser and on mobile devices.
                        </p>
                        <p>
                            <div className="inline-image"><img src="/img/content/author_dash.jpg"/></div>
                            <div className="caption">A dashboard where an author can edit an activity - their game scenario.</div>
                            <div className="inline-image"><img src="/img/content/author_edit1.jpg"/></div>
                            <div className="caption">Authoring the content of an actual activity.</div>
                            <div className="inline-image"><img src="/img/content/smartchat.jpg"/></div>
                            <div className="caption">Finally, what the player sees.</div>
                        </p>
                        <p className="demo-links">
                            Here's a few demos made with Muzzy Lane Author: <br/>
                            <a href="#" className="btn btn-info" target="_blank">Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="#" className="btn btn-info" target="_blank">Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="#" className="btn btn-info" target="_blank">Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="#" className="btn btn-info" target="_blank">Demo <span className="fa fa-gamepad"></span></a> <br/>
                        </p>
                        <p>
                            (TODO: Telescope Section Here)
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Author;
