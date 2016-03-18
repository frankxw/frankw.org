'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var Editors = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className="gcw">
                    <div className="bg"></div>
                    <div>
                        <p>
                            GCW is being built with an MMO architecture in mind. I'm using Unreal 4 and building a custom backend. <br/>
                            Although the project isn't that far along yet, feel free to check out it's progress. If you're a fan of libuv, you may be interested in how I'm utilizing it as the core of my server framework.
                        </p>
                        <p>
                            <a href="https://github.com/demalus/gcw-server-core" className="btn btn-info" target="_blank">Core Server Library <span className="fa fa-external-link"></span></a>
                        </p>
                        <p>
                            <a href="https://github.com/demalus/gcw-server-frontend" className="btn btn-info" target="_blank">Lightweight API Frontend <span className="fa fa-external-link"></span></a>
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Editors;
