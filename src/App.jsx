import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Build something people love"
          subtitle="A simple, fast way to launch your next idea."
          ctaText="Get started"
        />
      </main>
    </>
  );
}

export default App;