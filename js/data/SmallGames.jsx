'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var SmallGames = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className="smallgames">
                    <div className="bg"></div>
                    <div>
                        <p>
                            Coming Soon
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = SmallGames;
