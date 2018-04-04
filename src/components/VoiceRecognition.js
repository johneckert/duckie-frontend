import { Component } from 'react';
import { connect } from 'react-redux';
import { getKeywords, updateTranscript, updateConversation } from '../actions/actions';

class VoiceRecognition extends Component {
  constructor(props) {
    super(props);
    // check to see if supported
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition ||
      window.oSpeechRecognition;

    if (SpeechRecognition != null) {
      this.recognition = this.createRecognition(SpeechRecognition);
    } else {
      console.warn('SpeechRecognition API not supported in this browser.');
    }
  }
  //name interval variable
  updateInterval;

  createRecognition = SpeechRecognition => {
    const defaults = {
      continuous: true,
      interimResults: false,
      lang: 'en-US'
    };

    let recognition = new SpeechRecognition();

    Object.assign(recognition, defaults, this.props);

    return recognition;
  };

  //generate full transcript
  bindResult = event => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    this.handleResult({ interimTranscript, finalTranscript });
    //reboot speech to text every time there is a result.
    this.continue();
  };

  start = () => {
    this.recognition.start();
  };

  stop = () => {
    this.recognition.stop();
  };

  continue = () => {
    this.recognition.stop();
    this.endSentence();
    setTimeout(() => {
      this.recognition.start();
    }, 500);
  };

  abort = () => {
    this.recognition.abort();
  };

  handleSpeechBegin = event => {
    this.updateInterval = setInterval(() => {
      this.props.dispatchUpdateConversation(this.props.user.id, this.props.conversation);
    }, 6500);
  };

  handleSpeechEnd = event => {
    this.props.dispatchUpdateConversation(this.props.user.id, this.props.conversation);
    clearInterval(this.updateInterval);
  };

  handleResult = event => {
    let newText = event.finalTranscript;
    let updatedTranscript = this.props.conversation.transcript.concat(newText);
    this.props.dispatchUpdateTranscript(updatedTranscript);
  };

  endSentence = () => {
    // add punctuation
    let endedSentence = this.props.conversation.transcript.concat('. ');
    //format text (capitalize first letter, etc)
    let updatedTranscript = endedSentence.replace(
      /.+?[\.\?\!](\s|$)/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    this.props.dispatchUpdateTranscript(updatedTranscript);
  };

  componentWillReceiveProps({ stop }) {
    if (stop) {
      this.stop();
    }
  }

  componentDidMount() {
    this.recognition.addEventListener('start', this.handleSpeechBegin);
    this.recognition.addEventListener('end', this.handleSpeechEnd);

    this.recognition.addEventListener('result', this.bindResult);

    this.start();
  }

  componentWillUnmount() {
    this.abort();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetKeywords: json => dispatch(getKeywords(json)),
    dispatchUpdateConversation: (userId, conversation) =>
      dispatch(updateConversation(userId, conversation)),
    dispatchUpdateTranscript: updatedTranscript => {
      dispatch(updateTranscript(updatedTranscript));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    conversation: state.conversation,
    listening: state.listening
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceRecognition);
