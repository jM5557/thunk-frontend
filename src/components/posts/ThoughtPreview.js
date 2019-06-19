import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ThoughtPreview extends Component {
    render() {
      let myThought = this.props.thoughts_[this.props.index].post;
      let myComment = this.props.thoughts_[this.props.index].comment;
      let myCount = this.props.thoughts_[this.props.index].count;
      let myTags = this.props.thoughts_[this.props.index].tag;
      console.log(myTags);

        return (
            <div className = "post-preview">
                <div className = "details-top">
                    <span className = "timestamp">
                        this.props.time_stamp needed
                    </span>
                </div>

                <div className = "text">
                    {myThought.text}
                </div>

                <div className = "tags">
                {myTags.map((myTag, i) => <span key = {i}> #{myTags[i].tag} </span>)}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = {this.props.upVote.bind(null, this.props.myProps.id)} className = "vote up">Up</button>
                        <span className = "votes">0</span>
                        <button onClick = {this.props.downVote.bind(null, this.props.myProps.id)} className = "vote down">Down</button>
                        <Link to = {`/thoughts/${myThought.id}`}>
                        <button className='comment-btn'><i className='fas fa-comments' /></button>
                        </Link>
                        <span className = "votes"> {myComment.length} </span>
                    </div>
                    <button onClick={() => this.props.startModalHandler()} className='report'> <i className='fas fa-flag' /> </button>
                </div>
            </div>
        )
    }
}
//{this.props.myProps.hash_tag.map((myTag, i) => <span key = {i}>#{myTag} </span> )}
//<span className = "votes"> {this.props.comments_[this.props.myProps.id].length} </span>
