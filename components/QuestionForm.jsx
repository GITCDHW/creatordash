import React, { useState } from 'react';

const QuestionForm = ({ onUrlGenerated }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatItDoes: '',
    targetUsers: '',
    pricing: '',
    contact: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate site.');
      }

      const data = await response.json();
      onUrlGenerated(data.siteUrl); // Pass the generated URL back to the parent
    } catch (err) {
      setError(err.message);
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Launch Your Idea!</h2>
      <p className="text-gray-600 mb-8 text-center">Answer these 5 quick questions to get your personalized launch page instantly.</p>

      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          1. What's the name of your project/product?
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
          placeholder="e.g., My Awesome App"
          required
        />
      </div>

      {/* What it does */}
      <div className="mb-6">
        <label htmlFor="whatItDoes" className="block text-gray-700 text-sm font-bold mb-2">
          2. What does your project/product do? (Brief description)
        </label>
        <textarea
          id="whatItDoes"
          name="whatItDoes"
          value={formData.whatItDoes}
          onChange={handleChange}
          rows="3"
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
          placeholder="e.g., A mobile app that connects dog owners with local dog walkers."
          required
        ></textarea>
      </div>

      {/* Target Users */}
      <div className="mb-6">
        <label htmlFor="targetUsers" className="block text-gray-700 text-sm font-bold mb-2">
          3. Who are your target users?
        </label>
        <textarea
          id="targetUsers"
          name="targetUsers"
          value={formData.targetUsers}
          onChange={handleChange}
          rows="3"
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
          placeholder="e.g., Busy professionals who own dogs and live in urban areas."
          required
        ></textarea>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <label htmlFor="pricing" className="block text-gray-700 text-sm font-bold mb-2">
          4. How will you price your product/service?
        </label>
        <input
          type="text"
          id="pricing"
          name="pricing"
          value={formData.pricing}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
          placeholder="e.g., Free tier with premium features for $9.99/month."
          required
        />
      </div>

      {/* Contact */}
      <div className="mb-6">
        <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">
          5. How can users contact you or learn more?
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
          placeholder="e.g., support@myawesomeapp.com or a link to your social media."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-teal-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate My Launch Page!'}
      </button>

      {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
    </form>
  );
};

export default QuestionForm;
