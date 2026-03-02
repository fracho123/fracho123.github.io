import React from 'react';

// Import our new components
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactHighlights from './components/ImpactHighlights';
import Blog from './components/Blog';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Experience from './components/Experience';
import AcademicExperience from './components/AcademicExperience';
import Education from './components/Education';
import OffScreen from './components/OffScreen';

function App() {
  return (
    <div className="min-h-screen text-stone-300 font-sans selection:bg-[#2c3326] selection:text-stone-100">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <Header />
        <Hero />
        {/*<ImpactHighlights />*/}
        {/*<Blog />*/}
        {/*<Projects />*/}
        {/*<OpenSource />*/}
        <Experience />
        <AcademicExperience />
        <div className="-mt-4">
          <Education />
        </div>
        {/*<OffScreen />*/}
        
      </div>
    </div>
  );
}

export default App;