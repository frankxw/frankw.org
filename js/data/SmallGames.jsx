'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var SmallGames = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className='samllgames'>
                    <h1>Coming Soon...</h1>
                </div>
            </ContentSection>
        );
    }
});

module.exports = SmallGames;
