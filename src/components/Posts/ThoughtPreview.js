import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ThoughtPreview extends Component {
    constructor (props) {
        super(props);
    }

    render() {
      let myThought = this.props.thoughts_.post;
      let myComment = this.props.thoughts_.comment;
      // let myCount = this.props.thoughts_[this.props.index].count;
      let myTags = this.props.thoughts_.tag;

        return (
            <div className = "post-preview">
                <div className = "details-top">
                  <p>postId: {myThought.id} </p>
                    <span className = "timestamp">
                        {this.props.thoughts_.post.createdAt}
                    </span>
                </div>

                <div className = "text">
                    {myThought.text}
                </div>

                <div className = "tags">
                { myTags.map((myTag, i) => <span key = {i}> #{myTags[i].tag} </span>)}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = { () => null } className = "vote up">Up</button>
                        <span className = "votes">0</span>
                        <button onClick = { () => null } className = "vote down">Down</button>
                        <Link to = {`/thoughts/${myThought.id}`}>
                            <i className='fas fa-comments' />
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
