import { ArrowRight } from 'lucide-react';

export default function ComingSoon() {
  // Sample site data - replace with your actual data
  const siteData = {
    hero: {
      tagline: "Coming Soon",
      title: {
        part1: "Get Ready For",
        part2: "Something",
        part3: "Amazing",
      },
      description: "We're working hard to bring you an incredible new experience"
    }
  };

  // Custom CSS for purple gradient
  const purpleGradientStyle = {
    background: 'linear-gradient(to right, #8b5cf6, #d946ef)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <section className="py-8 flex items-center text-white">
      <div className="mx-auto px-4 text-center flex flex-col justify-center items-center">
        <div className="mb-4 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors w-fit px-4 py-2 rounded-full">
          <p>{siteData.hero.tagline}</p>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {siteData.hero.title.part1} <br />
          {siteData.hero.title.part2}{' '}
          <span style={purpleGradientStyle}>{siteData.hero.title.part3}</span>
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">{siteData.hero.description}</p>
        
      </div>
    </section>
  );
}