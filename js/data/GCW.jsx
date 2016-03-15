'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var GCW = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className='gcw'>
                    <h1>Coming Soon...</h1>
                </div>
            </ContentSection>
        );
    }
});

module.exports = GCW;
