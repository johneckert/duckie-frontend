import { Component } from 'react';

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
      console.warn('The current browser does not support the SpeechRecognition API.');
    }
  }

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

    this.props.onResult({ interimTranscript, finalTranscript });
    //reboot speech to text.
    this.continue();
  };

  start = () => {
    this.recognition.start();
  };

  stop = () => {
    console.log('STOP IN VOICE');
    this.recognition.stop();
  };

  //how do i execute this??????
  continue = () => {
    this.recognition.stop();
    setTimeout(() => {
      this.recognition.start();
    }, 1000);
  };

  abort = () => {
    console.log('abort!');
    this.recognition.abort();
  };

  componentWillReceiveProps({ stop }) {
    if (stop) {
      this.stop();
    }
  }

  componentDidMount() {
    const events = [
      { name: 'start', action: this.props.onStart },
      { name: 'end', action: this.props.onEnd },
      { name: 'error', action: this.props.onError }
    ];

    events.forEach(event => {
      this.recognition.addEventListener(event.name, event.action);
    });

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

export default VoiceRecognition;
