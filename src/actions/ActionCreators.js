//incrememt likea_bos

export function upVote(inputPostId)
{
  return{
    type: 'UP_VOTE',
    inputPostId,
  }
}
//add comments
export function downVote(inputPostId)
{
  return{
    type: 'DOWN_VOTE',
    inputPostId,
  }
}
export function reportThought(inputPostId)
{
  return{
    type: 'REPORT_THOUGHT',
    inputPostId,
  }
}

export function createThought(inputPostId, inputText)
{
  return {
    type: 'CREATE_THOUGHT',
    inputPostId,
    inputText,
    inputUpVote: 0,
    inputDownVote: 0,
    inputReportCount: 0,
    inputHashTags: 0,
    inputTimeStamp: 0
  }
}

export function createComment(inputPostId, inputText, inputMarkOwner)
{

  return {
    type: 'CREATE_COMMENT',
    inputPostId,
    inputText,
    inputMarkOwner,
  }
}
