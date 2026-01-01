import Hero from '../../components/Hero';
import Features from '../../components/Features';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}