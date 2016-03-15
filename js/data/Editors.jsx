'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var Editors = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className='editors'>
                    <h1>Coming Soon...</h1>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Editors;
