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
                            <a href="https://insights.muzzylane.com/sample/web/e97e0615-0e1e-4bd8-957b-e215d176c56e" className="btn btn-info" target="_blank">Insights Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="https://sfc.muzzylane.com/sample/web/548aeede-6c25-4425-b642-e54e1711c6ec" className="btn btn-info" target="_blank">SmartChat Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="https://upvote.muzzylane.com/sample/web/31786f77-c218-42f0-9f8b-d79deea788de" className="btn btn-info" target="_blank">Vote Demo <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="https://align.muzzylane.com/sample/web/4b227d98-fc59-43f1-b4bb-bd5d966fb937" className="btn btn-info" target="_blank">Align Demo <span className="fa fa-gamepad"></span></a> <br/>
                        </p>
                        <p>
                            I also worked on tools to support the new Muzzy Lane service. The tool that saves us the most time is a website called Telescope. This site allows us to monitor the service, look up information from the database, and manages our app deployments. <br/>
                            <div className="inline-image"><img src="/img/content/telescope1.jpg"/></div>
                            <div className="caption">A listing of running applications.</div>
                            <div className="inline-image"><img src="/img/content/telescope2.jpg"/></div>
                            <div className="caption">Selecting a version to deploy.</div>
                            <div className="inline-image"><img src="/img/content/telescope3.jpg"/></div>
                            <div className="caption">Deployment notifies you of it's status throughout the process.</div>
                        </p>
                        <p>
                            Upgrading and deploying apps in the service is as easy as selecting a published version and clicking a button.  Telescope even handles graceful shutdowns and rolling upgrades across a fleet of servers for no-downtime upgrades.
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Author;
