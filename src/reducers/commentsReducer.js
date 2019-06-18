function createComments(state = [], action)
{
  // inputCommentId, inputText, inputMarkOwner)
  switch(action.type)
  {
    case 'CREATE_COMMENT':
      return [...state,{text:action.inputText, mark_owner: action.inputMarkOwner}]
    case 'REMOVE_COMMENT':

      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i+1)
      ]

  default:
    return state;
}
}

function commentsReducer(state = [], action)
{

  if(typeof action.inputPostId !== 'undefined')
  {
    return{
      //take the current statuses
      ...state,
      //overwrite this post witha new cloneElement
      [action.inputPostId]: createComments(state[action.inputPostId],action)
    }
  }
  return state;
}

export default commentsReducer;
