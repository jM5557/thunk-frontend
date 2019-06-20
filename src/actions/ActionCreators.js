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

export function createThought(inputPostId, inputText, inputUpVote, inputDownVote, inputReportCount, inputHashTags, inputTimeStamp)
{
  return {
    type: 'CREATE_THOUGHT',
    inputPostId,
    inputText,
    inputUpVote,
    inputDownVote,
    inputReportCount,
    inputHashTags,
    inputTimeStamp,
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
