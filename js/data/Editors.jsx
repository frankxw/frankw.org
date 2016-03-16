'use strict';

var React           = require("react"),
    ContentSection  = require('../ContentSection.jsx');

var Editors = React.createClass({
    render: function() {
        return (
            <ContentSection>
                <div className="editors">
                    <div className="bg"></div>
                    <div>
                        <p>
                            During my time at Muzzy Lane, I was responsible for developing and maintaining a set of tools used by our proprietary Locust game engine.
                        </p>
                        <p>
                            Our scene editor began with the basics, being able to place characters and define boundaries: <br/>
                            <div className="inline-image"><img src="/img/content/scene_basic.jpg"/></div>
                            <div className="caption">Screenshot from <a href="http://pastpresent.muzzylane.com" target="_blank">Past Present</a> - an American history RPG.</div>
                        </p>
                        <p>
                            Over time, the scene editor grew and was used to create all kinds of gameplay and cinematic scenes: <br/>
                            <div className="inline-image"><img src="/img/content/scene_better1.jpg"/></div>
                            <div className="caption">Game world from <a href="http://www.muzzylane.com/products/nell/" target="_blank">NELL</a> - an early language learning mystery game.</div>
                            <div className="inline-image"><img src="/img/content/scene_better2.jpg"/></div>
                            <div className="caption">A scene from <a href="http://www.muzzylane.com/products/1450/" target="_blank">Quit It</a> - a smoking cessation game developed for Memorial Sloane-Kettering Cancer Center.</div>
                            <div className="inline-image"><img src="/img/content/scene_camerapath.jpg"/></div>
                            <div className="caption">A camera path in <a href="http://digitalglass.biz/hungry-birds/" target="_blank">Hungry Birds</a> - a microevolution museum-game built for Digital Glass.</div>
                        </p>
                        <p>
                            In addition to editing a scene, I was responsible for a suite of logic scripting tools, chiefly a conversation editor and quest / state editor. <br/>
                            At first, the conversation editor was limited to setting up a sequence of nodes in a conversation, but quickly grew to become a much more generic visual scripting tool. <br/>
                            <div className="inline-image"><img src="/img/content/spc1.jpg"/></div>
                            <div className="caption">A simple conversation with a conditional check at the start.</div>
                            <div className="inline-image"><img src="/img/content/spc2.jpg"/></div>
                            <div className="caption">A sequence that controls the conversational nodes, cameras, and scoring.</div>
                            <div className="inline-image"><img src="/img/content/quest.jpg"/></div>
                            <div className="caption">Editing a quest's objectives.</div>
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = Editors;
