//incrememt likea_bos

export function upVote(inputPostId)
{
  console.log("ActionCreator->upVote()");
  return{
    type: 'UP_VOTE',
    inputPostId,
  }
}
//add comments
export function downVote(inputPostId)
{
  console.log("ActionCreator->downVote()");
  return{
    type: 'DOWN_VOTE',
    inputPostId,
  }
}
//remove comment

export function createThought(inputPostId, inputText, inputTag)
{
  console.log("ActionCreator->createThought()");
  return {
    type: 'CREATE_THOUGHT',
    inputPostId,
    inputText,
    inputTag,
  }
}

export function createComment(inputPostId, inputText, inputMarkOwner)
{
  console.log("ActionCreator->createComment()");
  return {
    type: 'CREATE_COMMENT',
    inputPostId,
    inputText,
    inputMarkOwner,
  }
}
