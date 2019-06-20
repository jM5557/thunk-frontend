import axios from "axios";

let lat = 0.00;
let long = 0.00;


window.setInterval( () => {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((pos) => { 
        long = pos.coords.longitude;
        lat = pos.coords.latitude;
    }, 
    
    function() {

      console.log('some error');

    });

  }

  else {
    
    console.log('some error');

  }
}, 5000);

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
      axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/', {
        text: action.inputText,
        lattitude: lat,
        longitude: long
      });
      console.log(action.inputPostId);
      return [...state,{
        user: null,
        post: {
          id: action.inputPostId,
          text: action.inputText,
          lattitude: lat,
          longitude: long
        },
        comment: [],
        tag: [],
        vote: 0
        
      }]

    case 'GET_THOUGHTS' :
      return action.thoughts_

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
