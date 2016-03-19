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
                            Over the years at Muzzy Lane, I worked on many games and prototypes, ranging from being the only programmer to being on a small team.  At one point or another, I've touched virtually all aspects of the development of these games.
                        </p>
                        <p className="demo-links">
                            You can play a few of them for free:
                            <a href="http://education.nationalgeographic.org/media/underground-railroad-journey-freedom/" className="btn btn-info" target="_blank">Underground Railroad: Journey to Freedom <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="http://digitalglass.biz/the-ipad-app/" className="btn btn-info" target="_blank">Hungry Birds <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="https://fox-stage.muzzylane.com/" className="btn btn-info" target="_blank">Feed the Fox <span className="fa fa-gamepad"></span></a> <br/>
                            <a href="http://kickinnutrition.tv/game-page" className="btn btn-info" target="_blank">StudenTopia <span className="fa fa-gamepad"></span></a> <br/>
                        </p>
                        <p>
                            UI:
                            <div className="inline-image"><img src="/img/content/avatar_creator.jpg"/></div>
                            <div className="caption">A scene where the player can customize their avatar.</div>
                        </p>
                        <p>
                            AI:
                            <div className="inline-image"><img src="/img/content/elektra1.jpg"/></div>
                            <div className="caption">Customers are spawned into a store, and it's up to you to help them make purchases.</div>
                        </p>
                        <p>
                            Gameplay Scripting:
                            <div className="inline-image"><img src="/img/content/lib1.jpg"/></div>
                            <div className="caption">A mystery game where the player must figure out all the puzzles in the room.</div>
                            <div className="inline-image"><img src="/img/content/lib2.jpg"/></div>
                            <div className="caption">A solved puzzle may change the state of the room, from interactions to lighting.</div>
                            <div className="inline-image"><img src="/img/content/minigame1.jpg"/></div>
                            <div className="caption">Many of our games contained minigame segments.</div>
                        </p>
                        <p>
                            Scene Stitching:
                            <div className="inline-image"><img src="/img/content/tech1.jpg"/></div>
                            <div className="caption">You may start off in one area, talking to an NPC.</div>
                            <div className="inline-image"><img src="/img/content/tech2.jpg"/></div>
                            <div className="caption">Next, you'll need to be in a completely different scene - and this all needs to be remembered for the next time you log in.</div>
                        </p>
                    </div>
                </div>
            </ContentSection>
        );
    }
});

module.exports = SmallGames;
