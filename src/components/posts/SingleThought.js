import React, { Component } from 'react';
import Comments from './Comments';
import {withRouter} from 'react-router-dom'

class SingleThought extends Component {
    render() {
      console.log("params: ",this.props.match.params);
        return (
            <div className = "post-preview">
            <p>THIS IS SINGLE</p>
                <p>thoughtID: </p>
                <div className = "details-top">
                    <span className = "timestamp">
                    </span>
                </div>

                <div className = "text">
                </div>

                <div className = "tags">
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = {this.props.upVote.bind(null, this.props.inputPostId)} className = "vote up">Up</button>
                        <span className = "votes"></span>
                        <button onClick = {this.props.downVote.bind(null, this.props.inputPostId)} className = "vote down">Down</button>
                        <span className = "votes"></span>
                        <button> seeComments</button>
                        <span className = "votes"> </span>

                    </div>
                    <button className = "report">Flag</button>
                </div>

            </div>
        )
    }
}

export default withRouter(SingleThought)
