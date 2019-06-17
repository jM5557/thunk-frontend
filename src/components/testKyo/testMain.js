import React from 'react';
import TestThoughtsPostPreview from './testThoughtsPostPreview';


class TestMain extends React.Component{
    render(){
      console.log("In ",this.props.thoughts_[0]["id"]);

      return(
        <div>
        <p>----------This is TestMain.js----------</p>
        <TestThoughtsPostPreview {...this.props}/>
        <p>----------This is TestMain.js----------</p>
        </div>
      )
    }
  };

export default TestMain;
