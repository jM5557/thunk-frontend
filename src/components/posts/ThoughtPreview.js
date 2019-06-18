import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ThoughtPreview extends Component {
    render() {
      let myThought = this.props.myProps;
        return (

            <div className = "post-preview">
            <p>THIS IS preview</p>
                <p>thoughtID: {this.props.myProps.id}</p>
                <div className = "details-top">
                    <span className = "timestamp">
                        {this.props.myProps.time_stamp}
                    </span>
                </div>

                <div className = "text">
                    {this.props.myProps.text}
                </div>

                <div className = "tags">
                    {this.props.myProps.hash_tag.map((myTag, i) => <span key = {i}>#{myTag} </span> )}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = {this.props.upVote.bind(null, this.props.myProps.id)} className = "vote up">Up</button>
                        <span className = "votes">{myThought.up_vote}</span>
                        <button onClick = {this.props.downVote.bind(null, this.props.myProps.id)} className = "vote down">Down</button>
                        <span className = "votes">{myThought.down_vote}</span>
                        <Link to = {`/thoughts/${myThought.id}`}>
                        <button> seeComments</button>
                        </Link>
                        <span className = "votes"> {this.props.comments_[this.props.myProps.id].length} </span>

                    </div>
                    <button onClick = {this.props.reportThought.bind(null, myThought.id)}className = "report">Flag</button>
                    <span className = "votes"> {myThought.report_count} </span>
                </div>
            </div>
        )
    }
}
