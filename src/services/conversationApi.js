import BASE_URL from '../urls.js';

class ConversationApi {
  static create(userId, conversation) {
    console.log('ConversationAPI', conversation);
    return fetch(BASE_URL + 'users/' + userId + '/conversations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(conversation)
    }).then(response => {
      return response;
      response.json();
    });
  }

  static update(userId, conversation) {
    if (conversation.transcript !== '') {
      return fetch(BASE_URL + 'users/' + userId + '/conversations/' + conversation.id, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(conversation)
      }).then(keywords => keywords.json());
    }
  }
}

export default ConversationApi;