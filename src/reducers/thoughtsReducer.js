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
    case 'CREATE_THOUGHT' :
      console.log("REDUCER: create_thought", state);
      return [...state,{
        id: action.inputPostId,
        text: action.inputText,
        up_vote: action.inputUpVote,
        down_vote: action.inputDownVote,
        report_count: action.inputReportCount,
        hash_tag: action.inputHashTags,
        time_stamp: action.inputTimeStamp,
      }]
    default :
      return state;
  }
}

export default thoughtsReducer;
// return [...state,{text:action.inputText, mark_owner: action.inputMarkOwner}]
//export function createThought(inputPostId, inputText, inputTags)
// inputPostId,
// inputText,
// inputUpVote,
// inputDownVote,
// inputReportCount,
// inputHashTags,
// inputTimeStamp,
// "id": 0,
// "text": "Snow! ⛄️🌨❄️ #lifewithsnickers",
// "up_vote": 10,
// "down_vote": 2,
// "report_count": 0,
// "hash_tag":["snow", "daily","more", "stuff"],
// "time_stamp" : "1 min ago", //i dont need this later
