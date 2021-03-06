import React from 'react';
import DashboardBubbleChart from './DashboardBubbleChart';

const KeywordArea = props => {
  return (
    <div className="dashboard-keyword-area">
      <div className="dashboard-keyword-header">Top Keywords</div>
      <DashboardBubbleChart />
    </div>
  );
};

export default KeywordArea;
