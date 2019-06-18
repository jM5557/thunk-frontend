function commentsReducer(state = [], action)
{
  console.log("commentReducer.js - > case: CREATE_COMMENT");
  switch(action.type)
  {
    case 'CREATE_COMMENT':
      return [...state,{text:action.inputText}]
    default:
      return state;
  }
}


export default commentsReducer;
