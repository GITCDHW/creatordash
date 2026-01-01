import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Launch Your Creator Website in Minutes.
          <br className="hidden sm:inline" /> No Code. No Fuss.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          CreatorDash helps small creators instantly generate and publish stunning one-page sites by answering just 5 simple questions.
        </p>
        <Link href="/mvp" className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
