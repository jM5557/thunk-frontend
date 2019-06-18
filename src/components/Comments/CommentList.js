import React, { Component } from 'react';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className = "comment-list">
                { this.props.list.map((c, i ) => {
                    return (

                        <SingleComment key = {i} data = { c } />

                    )
                }) }
            </div>
        )
    }
}
