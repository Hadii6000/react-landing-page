import FeatureCard from './FeatureCard';

const features = [
  { id: 1, icon: '⚡', title: 'Fast setup', description: 'Go from idea to launch in minutes, not weeks.' },
  { id: 2, icon: '🔒', title: 'Secure by default', description: 'Your data stays protected with sensible defaults.' },
  { id: 3, icon: '📈', title: 'Built to grow', description: 'Start small and scale up as your audience grows.' },
];

function Features() {
  return (
    <section className="features" id="features">
      <h2>Why choose Launchly</h2>
      <div className="feature-grid">
        {features.map(({ id, icon, title, description }) => (
          <FeatureCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;