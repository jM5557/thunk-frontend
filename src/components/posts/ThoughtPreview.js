import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ThoughtPreview extends Component {
    render() {
      console.log("ThoughtsPreview.js", this.props);
      let myThought = this.props.myProps;
        return (
            <div className = "post-preview">
                <div className = "details-top">
                    <span className = "timestamp">
                        {this.props.myProps.post.createdAt}
                    </span>
                </div>

                <div className = "text">
                    {this.props.myProps.post.text}
                </div>

                <div className = "tags">
                    {this.props.myProps.tag.map((myTag, i) => <span key = {i}>#{myTag.tag} </span> )}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = {this.props.upVote.bind(null, this.props.myProps.post.id)} className = "vote up">Up</button>
                        <span className = "votes">{myThought.count}</span>
                        <button onClick = {this.props.downVote.bind(null, this.props.myProps.post.id)} className = "vote down">Down</button>
                        
                        <Link to = {`/thoughts/${myThought.id}`}>
                        <button className='comment-btn'><i className='fas fa-comments' /></button>
                        </Link>
                        <span className = "votes"> {myThought.comment.length} </span>
                    </div>
                    <button onClick={() => this.props.startModalHandler()} className='report'> <i className='fas fa-flag' /> </button>
                </div>
            </div>
        )
    }
}
//{this.props.myProps.hash_tag.map((myTag, i) => <span key = {i}>#{myTag} </span> )}
//<span className = "votes"> {this.props.comments_[this.props.myProps.id].length} </span>
