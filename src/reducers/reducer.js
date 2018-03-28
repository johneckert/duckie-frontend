import {
  TOGGLE_LISTENING,
  GET_KEYWORDS,
  UPDATE_TRANSCRIPT,
  // CREATE_CONVERSATION,
  CREATED_CONVERSATION,
  // UPDATE_CONVERSATION,
  UPDATED_CONVERSATION,
  FAILED_UPDATED_CONVERSATION,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  AUTHORIZE_USER,
  AUTHORIZE_FAIL,
  LOG_OUT
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
  keywords: [
    // { id: 1, word: 'javascript', relevance: 1.912565, color: 'royal' },
    // { id: 2, word: 'ruby', relevance: 1.815, color: 'mellow-yellow' },
    // { id: 3, word: 'function', relevance: 1.33333, color: 'royal' },
    // { id: 4, word: 'cheese', relevance: 1.1, color: 'red-orange' },
    // { id: 5, word: 'conditional', relevance: 1.7712565, color: 'aqua' },
    // { id: 6, word: 'variable', relevance: 1.56435, color: 'gold' },
    // { id: 7, word: 'sandwich', relevance: 1.912565, color: 'royal' },
    // { id: 8, word: 'dongle', relevance: 1.815, color: 'mellow-yellow' },
    // { id: 9, word: 'closure', relevance: 1.33333, color: 'royal' },
    // { id: 11, word: 'lisp', relevance: 1.1, color: 'red-orange' },
    // { id: 11, word: 'html', relevance: 1.7712565, color: 'aqua' },
    // { id: 12, word: 'vinegar', relevance: 1.56435, color: 'gold' }
  ], //words are for testing should be empty
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
      return { ...state, loggedIn: false };

    case AUTHORIZE_USER:
      return { ...state, user: action.payload, loggedIn: true };

    case AUTHORIZE_FAIL:
      return { ...state, loggedIn: false };

    case LOG_OUT:
      return { ...state, loggedIn: false, user: emptyUser };

    default:
      return state;
  }
};

export default duckieReducer;
