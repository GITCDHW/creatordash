import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-indigo-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Launch Your Vision?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Join hundreds of creators already using CreatorDash to bring their ideas to life online quickly and effortlessly.
        </p>
        <Link href="/mvp" className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
          Create My Website Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
