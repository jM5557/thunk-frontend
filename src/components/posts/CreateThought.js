import React, { Component } from 'react'

export default class CreateThought extends Component {
  constructor(props){
    super(props)
    this.state ={
      inputPostId: this.props.thoughts_.length,
      inputUpVote_:0,
      inputDownVote_:0,
      inputReportCount_:0,
      inputTimeStamp_:"0 min ago",
      inputMarkOwner_:true,
      inputText_:"",
      inputTextHolder_ : "",
      inputHashTagsHolder_:[],
    }
  }

  getInputText = (event) => {
    this.setState({ inputTextHolder_: event.target.value })
  }

  getInputHashTags = (event) => {
    this.setState({ inputHashTagsHolder_: [event.target.value] })
  }
  // btnSubmit = () =>
  // {
  //
  //     this.setState((state) => ({
  //       inputText_: state.inputTextHolder_,
  //       inputHashTags_:push(inputHashTagsHolder_),
  //     }) )
  //
  // }
    render(){
        return (
            <div>
            <br/>    <br/>    <br/>    <br/>    <br/>    <br/>

                <p> Create Thought page </p>
                <input value = {this.state.inputTextHolder_} onChange = {this.getInputText} placeholder = "type your thought"/>
                <br/>
                <input value = {this.state.inputHashTagsHolder_} onChange = {this.getInputHashTags} placeholder = "type has tags with #"/>
                <button onClick = {this.props.createThought.bind(null,
                  this.state.inputPostId,
                  this.state.inputTextHolder_,
                  this.state.inputUpVote_,
                  this.state.inputDownVote_,
                  this.state.inputReportCount_,
                  this.state.inputHashTagsHolder_,
                  this.state.inputTimeStamp_
                  )}>
                  submit
                </button>

            </div>
        )
    }
}
//export function createThought(inputPostId, inputText, inputTag)

//   "id": 0,
//   "text": "Snow! ⛄️🌨❄️ #lifewithsnickers",
//   "up_vote": 10,
//   "down_vote": 2,
//   "report_count": 0,
//   "hash_tag":["snow", "daily","more", "stuff"],
//   "time_stamp" : "1 min ago", //i dont need this later
