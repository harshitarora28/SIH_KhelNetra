import React, { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Candidates from './components/Candidates';
import Reviewers from './components/Reviewers';
import Reports from './components/Reports';

function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'Candidates':
        return <Candidates />;
      case 'Reviewers':
        return <Reviewers />;
      case 'Access Control':
        return <Reviewers />;
      case 'Reports':
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-20">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;