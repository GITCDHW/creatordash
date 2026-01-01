import FeatureCard from './FeatureCard';

const Features = () => {
  const featuresData = [
    {
      icon: '⚡',
      title: 'Lightning-Fast Setup',
      description: 'Generate your entire website by answering just 5 simple, guided questions.',
    },
    {
      icon: '✨',
      title: 'Beautifully Designed',
      description: 'Choose from professionally crafted templates that ensure your site looks stunning and converts.',
    },
    {
      icon: '🚀',
      title: 'Instant Publishing',
      description: 'Your one-page launch site is live and ready for your audience the moment you hit publish.',
    },
    {
      icon: '✍️',
      title: 'Focus on Your Craft',
      description: 'Spend less time on technical setup and more time creating amazing content.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Why Creators Choose CreatorDash
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
