"use client"; // This component uses client-side hooks

import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm';
import ResultDisplay from '../components/ResultDisplay';

export default function Home() {
  const [siteUrl, setSiteUrl] = useState(null);

  const handleUrlGenerated = (url) => {
    setSiteUrl(url);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 text-center">
        Creator Launchpad
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
        Transform your idea into a live, one-page website instantly. Just answer 5 simple questions below!
      </p>

      {siteUrl ? (
        <ResultDisplay siteUrl={siteUrl} />
      ) : (
        <QuestionForm onUrlGenerated={handleUrlGenerated} />
      )}
    </main>
  );
}
