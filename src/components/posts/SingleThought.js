import React, { Component } from 'react';
import Comments from './Comments';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';

class SingleThought extends Component {
  constructor(props){
    super(props)
    this.state ={
      inputTextHolder_ : "",
      inputText_:"",
      inputMarkOwner_:true,
    }
  }

  getInputText = (event) => {
    this.setState({ inputTextHolder_: event.target.value })
  }

  btnSubmit = () => {
    this.setState((state) => ({ inputText_: state.inputTextHolder_ }) )
  }
    render() {
      let myId = this.props.match.params.id;
      let myThought = this.props.thoughts_[myId];
      let myComment = this.props.comments_[myThought.id];
        return (
            <div className = "post-preview">
            <p>THIS IS SINGLE</p>
                <p>inputPostId:{myThought.id} </p>
                <div className = "details-top">
                    <span className = "timestamp">
                    {myThought.time_stamp}
                    </span>
                </div>

                <div className = "text">
                {myThought.text}
                </div>

                <div className = "tags">
                {myThought.hash_tag.map((myTag, i) => <span key = {i}>#{myTag} </span> )}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button onClick = {this.props.upVote.bind(null, myThought.id)} className = "vote up">Up</button>
                          <span className = "votes">{myThought.up_vote}</span>
                        <button onClick = {this.props.downVote.bind(null, myThought.id)} className = "vote down">Down</button>
                          <span className = "votes">{myThought.down_vote}</span>
                        <Link to = '/thoughts'>
                        <button> back</button>
                        </Link>

                    </div>
                    <button onClick = {this.props.reportThought.bind(null, myThought.id)}className = "report">Flag</button>
                    <span className = "votes"> {myThought.report_count} </span>
                </div>

                <div>
                {myComment.map((myComments, i ) => <Comments key = {i} myComment = {myComments}{...this.props}/>)}
                </div>
                <input value = {this.state.inputTextHolder_} onChange = {this.getInputText} placeholder = "type comment"/>
                <button onClick = {this.props.createComment.bind(null, myId, this.state.inputTextHolder_, this.state.inputMarkOwner_)}>submit</button>
            </div>
        )
    }
}

export default withRouter(SingleThought)
