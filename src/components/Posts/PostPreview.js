import React, { Component } from 'react';
import CommentList from '../comments/CommentList';

export default class PostPreview extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            data: {
                id: 1,
                timestamp: new Date().toLocaleDateString(),
                upvotes: 0,
                downvotes: 0,
                text: "This is a thought I once had. Isn't it cool huh?",
                longitude: 297,
                latitude: 325
            },

            tags: [ 
                { text: 'ThoughtApp' },
                { text: 'ThunkIsCool' }, 
                { text: 'WatIsThunk' }
            ],

            comments: [
                {
                    text: "This is a cool comment"
                },
                {
                    text: "This comment is better than yours"
                }
            ]
        }
    }
    
    render() {

        let displayTags = this.state.tags.map( (t, i) => {
            return (

                <span key = {i}>
                    { "#" + t.text }
                </span>

            )
        });

        return (
            <div className = "post-preview">
                <div className = "details-top">
                    <span className = "timestamp">
                        { this.state.data.timestamp }
                    </span>
                </div>

                <div className = "text">
                    { this.state.data.text }
                </div>

                <div className = "tags">
                    { displayTags }
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button className = "vote up">Up</button>
                        <span className = "votes">{ (this.state.data.upvotes - this.state.data.downvotes) }</span>
                        <button className = "vote down">Down</button>
                    </div>

                    <button className = "report">Flag</button>
                </div>

                <div className = "comments-list">
                    <CommentList list = { this.state.comments } />
                </div>
            </div>
        )
    }
}
