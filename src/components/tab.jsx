

import React, { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => handleTabClick('summary')}
        >
          Summary
        </div>
        <div
          className={`tab ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => handleTabClick('review')}
        >
          Review
        </div>
        <div
          className={`tab ${activeTab === 'overlook' ? 'active' : ''}`}
          onClick={() => handleTabClick('overlook')}
        >
          Overlook
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && <p>This is the Summary section.</p>}
        {activeTab === 'review' && <p>This is the Review section.</p>}
        {activeTab === 'overlook' && <p>This is the Overlook section.</p>}
      </div>
    </div>
  );
};

export default Tab;