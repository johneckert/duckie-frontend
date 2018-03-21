const defaultState = {
  conversation: {
    id: 1,
    user_id: 1,
    transcript: '', // 'I like to eat cheese while learning javascript and Ruby.  It helps me understand conditionals and functions.' //should be empty string when not testing
    created_at: ''
  },
  listening: false,
  user: {
    id: 1,
    username: 'John'
  },
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
  if (action.type === 'PLACEHOLDER') {
  } else {
    return state;
  }
};

export default duckieReducer;
