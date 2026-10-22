function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero" id="top">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button type="button" className="cta">
        {ctaText}
      </button>
    </section>
  );
}

export default Hero;