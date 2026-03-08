function HeroSection() {
  const heroData = {
    title1: "Shaping the",
    highlight: "Leaders",
    title2: "of Tomorrow",
    description:
      "Experience a world-class education system designed to foster innovation, creativity, and academic excellence.",
    buttons: [
      { text: "Join Now", primary: true },
      { text: "Learn More", primary: false },
    ],
  };

  return (
    <section className="relative min-h-screen pt-32 overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          {heroData.title1}{" "}
          <span className="text-blue-800">
            {heroData.highlight}
          </span>
          <br />
          {heroData.title2}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 text-gray-200">
          {heroData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          {heroData.buttons.map((btn, index) => (
            <button
              key={index}
              className={
                btn.primary
                  ? "bg-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                  : "bg-white/20 backdrop-blur px-8 py-3 rounded-xl border border-white/40 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              }
            >
              {btn.text}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;