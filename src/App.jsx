import Header from './components/Header';
import WelcomeBanner from './components/WelcomeBanner';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <WelcomeBanner message="Welcome to Launchly! Check out our new features below." />
      <main>
        <Hero
          title="Build something people love"
          subtitle="A simple, fast way to launch your next idea."
          ctaText="Get started"
        />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
