'use strict';

var _       = require('lodash'),
    React   = require("react"),
    Listing = require("./Listing.jsx");

var data = require('./data/works');

var Works = React.createClass({
    render: function() {

        var listings = [];
        var even = true;

        _.forIn(data, function(value, key) {
            listings.push(
                <Listing key={value.title} data={value} left={even}/>
            );
            even = !even;
        });

        return (
            <div className="works">
                {listings}
            </div>
        );
    }
});

module.exports = Works;
