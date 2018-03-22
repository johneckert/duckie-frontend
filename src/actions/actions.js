import ConversationApi from '../services/conversationApi';
import UserApi from '../services/userApi';

export const TOGGLE_LISTENING = 'TOGGLE_LISTENING';
export const GET_KEYWORDS = 'GET_KEYWORDS';
export const UPDATE_TRANSCRIPT = 'UPDATE_TRANSCRIPT';
export const CREATING_CONVERSATION = 'CREATING_CONVERSATION';
export const CREATED_CONVERSATION = 'CREATED_CONVERSATION';
export const UPDATING_CONVERSATION = 'UPDATING_CONVERSATION';
export const UPDATED_CONVERSATION = 'UPDATED_CONVERSATION';
export const LOGGED_IN = 'LOGGED_IN';
export const CREATE_USER = 'CREATE_USER';

export const toggleListening = () => {
  return { type: TOGGLE_LISTENING };
};

export const getKeywords = json => {
  return { type: GET_KEYWORDS, payload: json };
};

export const updateTranscript = updatedTranscript => {
  return { type: UPDATE_TRANSCRIPT, payload: updatedTranscript };
};

export const logIn = (email, password) => {
  return function(dispatch) {
    UserApi.login(email, password).then(user => {
      dispatch({ type: LOGGED_IN, payload: user });
    });
  };
};

export const createUser = user => {
  return { type: CREATE_USER, payload: user };
};

export const createConversation = (userId, conversation) => {
  return function(dispatch) {
    dispatch({ type: CREATING_CONVERSATION });
    ConversationApi.create(userId, conversation).then(conversation => {
      dispatch({ type: CREATED_CONVERSATION, payload: conversation });
    });
  };
};

export const updateConversation = (userId, conversation) => {
  return function(dispatch) {
    dispatch({ type: UPDATING_CONVERSATION });
    ConversationApi.update(userId, conversation).then(keywordsJson => {
      //this is retunring keywords as json
      dispatch({ type: UPDATED_CONVERSATION, payload: keywordsJson });
    });
  };
};
