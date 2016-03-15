'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var Author = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className='author'>
                    <h1>Coming Soon...</h1>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Author;
