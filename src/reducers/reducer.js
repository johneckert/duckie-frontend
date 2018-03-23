import {
  TOGGLE_LISTENING,
  GET_KEYWORDS,
  UPDATE_TRANSCRIPT,
  CREATE_CONVERSATION,
  CREATED_CONVERSATION,
  UPDATE_CONVERSATION,
  UPDATED_CONVERSATION,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  CREATE_USER,
  AUTHORIZE_USER,
  AUTHORIZE_FAIL,
  LOG_OUT
} from '../actions/actions';

const emptyUser = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null
};

const defaultState = {
  conversation: {
    id: '',
    user_id: '',
    transcript: '',
    // 'I like to eat cheese while learning javascript and Ruby.  It helps me understand conditionals and functions.', //should be empty string when not testing
    created_at: ''
  },
  listening: false,
  loggedIn: false,
  user: emptyUser,
  // id: '3',
  // firstName: 'John',
  // lastName: 'Eckert',
  // email: 'johnteckert@gmail.com',
  // password: 'password'
  keywords: [
    // { id: 1, word: 'javascript', relevance: 0.912565, color: 'royal' },
    // { id: 2, word: 'ruby', relevance: 0.815, color: 'mellow-yellow' },
    // { id: 3, word: 'function', relevance: 0.33333, color: 'royal' },
    // { id: 4, word: 'cheese', relevance: 0.1, color: 'red-orange' },
    // { id: 5, word: 'conditional', relevance: 0.7712565, color: 'aqua' },
    // { id: 6, word: 'variable', relevance: 0.56435, color: 'gold' }
  ], //words are for testing should be empty
  colors: ['royal', 'gold', 'red-orange', 'aqua', 'mellow-yellow']
};

const duckieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_LISTENING:
      return { ...state, listening: !state.listening };

    case GET_KEYWORDS:
      //assign a color to each keyword
      const keywords = action.payload.map((keyword, index) => {
        keyword.color = state.colors[index % state.colors.length];
        return keyword;
      });
      //add array of keywords to state
      return { ...state, keywords: keywords };

    case CREATED_CONVERSATION:
      return { ...state, conversation: action.payload };

    case UPDATE_TRANSCRIPT:
      return { ...state, conversation: { ...state.conversation, transcript: action.payload } };

    case UPDATED_CONVERSATION:
      //assign a color to each keyword
      const updatekeywords = action.payload.map((keyword, index) => {
        keyword.color = state.colors[index % state.colors.length];
        return keyword;
      });
      //add array of keywords to state
      return { ...state, keywords: updatekeywords };

    case LOGIN_SUCCEEDED:
      return { ...state, loggedIn: true };

    case LOGIN_FAILED:
      return { ...state, loggedIn: false };

    case CREATE_USER:
      console.log(('create user:', action.payload));
      return { ...state, user: action.payload };

    case AUTHORIZE_USER:
      console.log('auth user: ', action.payload);
      return { ...state, user: action.payload, loggedIn: true };

    case AUTHORIZE_FAIL:
      console.log('auth user: ', action.payload);
      return { ...state, loggedIn: false };

    case LOG_OUT:
      console.log(
        'log out',
        'user',
        state.user,
        'logged',
        state.loggedIn,
        't:',
        localStorage.token
      );
      return { ...state, loggedIn: false, user: emptyUser };

    default:
      return state;
  }
};

export default duckieReducer;
