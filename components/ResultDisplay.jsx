import React, { useState } from 'react';

const ResultDisplay = ({ siteUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto my-8 text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Your Launch Page is Live!</h2>
      <p className="text-gray-700 mb-6">Share this unique URL with your audience:</p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a 
          href={siteUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-grow text-lg break-all p-3 border border-gray-300 rounded-md bg-secondary hover:bg-gray-100 text-primary font-medium transition duration-200"
        >
          {siteUrl}
        </a>
        <button
          onClick={handleCopy}
          className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200"
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        (Note: The actual content of your generated page will depend on the implementation of `app/site/[id]/page.js`, which is not part of the current files.)
      </p>
    </div>
  );
};

export default ResultDisplay;
