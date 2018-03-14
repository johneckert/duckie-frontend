import React from 'react';
import TranscriptHeader from './TranscriptHeader';
import Recorder from './Recorder.js';
import Transcript from './Transcript';

const TranscriptionArea = props => {
  return (
    <div>
      <TranscriptHeader />
      <Recorder />
      <Transcript />
    </div>
  );
};

export default TranscriptionArea;
