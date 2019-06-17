function thoughtsReducer(state = [], action)
{
  switch(action.type)
  {
    case 'UP_VOTE' :
      console.log("thoughtReducer.js - > case: UP_VOTE -> i = ", action.inputPostId);
      const i = action.inputPostId;
      return[
        ...state.slice(0,i),
        {...state[i], up_vote: state[i].up_vote+1},
        ...state.slice(i+1),
      ]
    case 'DOWN_VOTE' :
      console.log("thoughtReducer.js - > case: DOWN_VOTE -> i = ", action.inputPostId);
      const j = action.inputPostId;
      return[
        ...state.slice(0,j),
        {...state[j], down_vote: state[j].down_vote+1},
        ...state.slice(j+1),
      ]

    default :
      return state;
  }
}

export default thoughtsReducer;
