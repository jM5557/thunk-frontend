import React from 'react';
import TestThoughtPost from './testThoughtPost';


class TestThoughtsPostPreview extends React.Component{
    render(){
      console.log("testPostPreview", this.props);

      return(
        <div>
        <p>----------This is TestPostPreview.js----------</p>
        {this.props.thoughts_.map((myThoughts, i) => <TestThoughtPost key = {i} inputPostId = {myThoughts.id} myProps = {myThoughts} {...this.props}/>)}
        <p>----------This is TestPostPreview.js----------</p>
        </div>
      )
    }
  };

export default TestThoughtsPostPreview;

//        {this.props.thoughts_.map((thoughts, i) => <TestPostPreview key = {i} myProps = {this.props}/>)}
// console.log("In ",this.props.thoughts_[0]["id"]);
