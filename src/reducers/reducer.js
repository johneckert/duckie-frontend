import {
  TOGGLE_LISTENING,
  GET_KEYWORDS,
  UPDATE_TRANSCRIPT,
  CREATED_CONVERSATION,
  UPDATED_CONVERSATION,
  FAILED_UPDATED_CONVERSATION,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  AUTHORIZE_USER,
  AUTHORIZE_FAIL,
  LOG_OUT,
  RESET_ERROR
} from '../actions/actions';

const emptyUser = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  numberOfConversations: null,
  userKeywords: null
};

const defaultState = {
  conversation: {
    id: '',
    user_id: '',
    transcript: '',
    created_at: ''
  },
  listening: false,
  loggedIn: false,
  error: false,
  user: emptyUser,
  keywords: [],
  colors: ['royal', 'gold', 'red-orange', 'aqua', 'mellow-yellow']
};

const duckieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LISTENING:
      return { ...state, listening: !state.listening };

    case GET_KEYWORDS:
      return { ...state, keywords: action.payload };

    case CREATED_CONVERSATION:
      return { ...state, conversation: action.payload };

    case UPDATE_TRANSCRIPT:
      return { ...state, conversation: { ...state.conversation, transcript: action.payload } };

    case UPDATED_CONVERSATION:
      return { ...state, keywords: action.payload };

    case FAILED_UPDATED_CONVERSATION:
      return { ...state };

    case LOGIN_SUCCEEDED:
      return { ...state, loggedIn: true, error: action.payload.error };

    case LOGIN_FAILED:
      return { ...state, loggedIn: false, error: action.payload.error };

    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, loggedIn: true };

    case CREATE_USER_FAIL:
      return { ...state, loggedIn: false, error: action.payload.error };

    case AUTHORIZE_USER:
      return { ...state, user: action.payload, loggedIn: true };

    case AUTHORIZE_FAIL:
      return { ...state, loggedIn: false };

    case LOG_OUT:
      return { ...state, loggedIn: false, user: emptyUser };

    case RESET_ERROR:
      return { ...state, error: false };

    default:
      return state;
  }
};

export default duckieReducer;
