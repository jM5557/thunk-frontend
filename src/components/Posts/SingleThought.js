import React, { Component } from 'react';
// import Comments from './Comments';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SingleThought extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      inputTextHolder_: '',
      inputText_: '',
      inputMarkOwner_: true,
      thought_data: null
    };
  }

  getInputText = event => {
    this.setState({ inputTextHolder_: event.target.value });
  };

  btnSubmit = () => {
    this.setState(state => ({ inputText_: state.inputTextHolder_ }));
  };

  componentDidMount () {
    this._isMounted = true;
    // IMPLEMENT API BACKEND FUNCTIONALITY
    // console.log(this.props.match.params.id);
    axios.get('https://thunk-api-19.herokuapp.com/api/v1/thought/' + this.props.match.params.id)
      .then( (res) => {
        this.setState({
          thought_data: res.data
        });

        console.log(res.data);
      })
      .catch( (err) => {
        console.log("There was an error");
      });
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  render() {
    let myThought = this.state.thought_data;

    if (myThought === null) {
      return (<div>Loading Post</div>); 
    }

    console.log(myThought.post.id);
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
                // onClick={this.props.upVote.bind(null, myId)}
                className='vote up'
              >
                Up
              </button>
              <span className='votes' />
              <button
                // onClick={this.props.downVote.bind(null, myId)}
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
            <button
              className = "delete"
              onClick = { () => { this.props.deleteThought(myThought.post.id) } }
            >
              Delete
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
                this.state.thought_data.post.id,
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

export default withRouter(SingleThought);
