import ConversationApi from '../services/conversationApi';
import UserApi from '../services/userApi';

export const TOGGLE_LISTENING = 'TOGGLE_LISTENING';
export const GET_KEYWORDS = 'GET_KEYWORDS';
export const UPDATE_TRANSCRIPT = 'UPDATE_TRANSCRIPT';
export const CREATING_CONVERSATION = 'CREATING_CONVERSATION';
export const CREATED_CONVERSATION = 'CREATED_CONVERSATION';
export const UPDATING_CONVERSATION = 'UPDATING_CONVERSATION';
export const UPDATED_CONVERSATION = 'UPDATED_CONVERSATION';
export const FAILED_UPDATED_CONVERSATION = 'FAILED_UPDATED_CONVERSATION';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_FAIL = 'AUTHORIZE_FAIL';
export const CREATE_USER = 'CREATE_USER';
export const LOG_OUT = 'LOG_OUT';

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
    UserApi.login(email, password).then(j => {
      if (j.error) {
        dispatch({
          type: LOGIN_FAILED,
          payload: { loggedIn: false, token: false, error: j.error }
        });
      } else {
        localStorage.setItem('token', j.token);
        console.log('token: ', localStorage.token);
        dispatch({
          type: LOGIN_SUCCEEDED,
          payload: { loggedIn: true, token: j.token, error: false }
        });
      }
    });
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  return { type: LOG_OUT };
};

export const authorizeUser = () => {
  return function(dispatch) {
    if (localStorage.token) {
      UserApi.authorize().then(user => {
        console.log(user);
        const currentUser = {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          password: user.password_digest,
          numberOfConversations: user.number_of_conversations,
          userKeywords: user.user_keywords
        };
        console.log('authaction', currentUser);
        if (user.error) {
          dispatch({ type: AUTHORIZE_FAIL, payload: user });
        } else {
          dispatch({ type: AUTHORIZE_USER, payload: currentUser });
        }
      });
    }
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
      if (keywordsJson.error) {
        dispatch({ type: FAILED_UPDATED_CONVERSATION });
      } else {
        dispatch({ type: UPDATED_CONVERSATION, payload: keywordsJson });
      }
    });
  };
};
