import React, { Component } from 'react';
import Thoughts from './../../../data/thoughts';
import Comments from './../../../data/comments';
import PostPreviewList from './../../posts/PostPreviewList';
import CommentList from './../../comments/CommentList';

export default class Activity extends Component {

    constructor (props) {
        super(props);

        this.state = {
            data: Thoughts,
            comment_data: Comments["2"],
            view: 'POSTS'
        }

        this.changeActivityView = this.changeActivityView.bind(this);
    }

    changeActivityView (ACTIVITY_VIEW) {

        this.setState({
            view: ACTIVITY_VIEW
        });

    }
    render() {
        console.log(this.state.comment_data);

        return (
            <div className = "activity-page content-page">

                <div className = "tab-wrapper">
                    <button onClick = { this.changeActivityView.bind(this, 'POSTS') }>
                        Thoughts
                    </button>

                    <button onClick = { this.changeActivityView.bind(this, 'COMMENTS') }>
                        Comments
                    </button>
                </div>

                { (this.state.view === 'POSTS') ?  (
                    <PostPreviewList postPreviewList = { this.state.data }  />
                ) : (
                    <CommentList commentList = { this.state.comment_data } />
                ) }
            </div>
        )
    }
}
