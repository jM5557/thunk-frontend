function thoughtsReducer(state = [], action)
{
  const i = action.inputPostId;
  switch(action.type)
  {
    case 'UP_VOTE' :
      return[
        ...state.slice(0,i),
        {...state[i], up_vote: state[i].up_vote+1},
        ...state.slice(i+1),
      ]
    case 'DOWN_VOTE' :
      return[
        ...state.slice(0,i),
        {...state[i], down_vote: state[i].down_vote+1},
        ...state.slice(i+1),
      ]
    case 'REPORT_THOUGHT' :
      return[
        ...state.slice(0,i),
        {...state[i], report_count: state[i].report_count+1},
        ...state.slice(i+1),
      ]
    default :
      return state;
  }
}

export default thoughtsReducer;
