import React, { Component } from 'react';
// import Comments from './Comments';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class OneThought extends Component {
  constructor() {
    super();
    this.state = {
      inputTextHolder_: '',
      inputText_: '',
      inputMarkOwner_: true
    };
  }

  getInputText = event => {
    this.setState({ inputTextHolder_: event.target.value });
  };

  btnSubmit = () => {
    this.setState(state => ({ inputText_: state.inputTextHolder_ }));
  };
  render() {
    let myId = Number(this.props.match.params.id);
    let thoughts = this.props.thoughts_;
    let myThought;

    thoughts.map((x, i) => {
      console.log(x.post.id, myId);
      if (x.post.id === myId) {
        console.log('Found it!: ', myId, x);
        myThought = x;
        console.log(this.props.thoughts_[0].post.text);
      }
    });

    //let myComment; // if it has comment show, if it doesnt, throw error
    return (
      <div>
        <div className='post-preview'>
          <div className='details-top'>
            <span className='timestamp' />
          </div>

          <div className='text'>{myThought.post.text}</div>
          <div className='tags'>
            {myThought.tag.map((myTag, i) => (
              <span key={i}>#{myTag.tag}</span>
            ))}
          </div>

          <div className='controls-bottom'>
            <div className='vote-wrapper'>
              <button
                onClick={this.props.upVote.bind(null, myId)}
                className='vote up'
              >
                Up
              </button>
              <span className='votes' />
              <button
                onClick={this.props.downVote.bind(null, myId)}
                className='vote down'
              >
                Down
              </button>
              <span className='votes' />
            </div>
            <button
              onClick={() => this.props.startModalHandler()}
              className='report'
            >
              <i className='fas fa-flag' />
            </button>
          </div>

          <div className='comments-wrapper'>
            <input
              value={this.state.inputTextHolder_}
              onChange={this.getInputText}
              placeholder='Share your thoughts about this post'
            />
            <button
              onClick={this.props.createComment.bind(
                null,
                myId,
                this.state.inputTextHolder_,
                this.state.inputMarkOwner_
              )}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OneThought);
