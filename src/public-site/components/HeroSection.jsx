import React from 'react'


function HeroSection() {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='max-w-6xl mx-auto px-6 flex items-center justify-between gap-10'>

        {/* Left side: Text content */}
        <div className='max-w-xl'>
          <span className='text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full'>
             RESOURCES & LEARNING
          </span>
          <h1 className="text-5xl font-bold mt-6 text-gray-900">
            Educational<span className="text-blue-600">Video</span> Guides
          </h1>
          <p className="text-gray-600 mt-6">
            Master our platform with step-by-step tutorials and insights into
            campus life and student success strategies designed for modern
            educators.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              ▶ Start Learning
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
              View Documentation
            </button>
        </div>
      </div>

      {/* Right side: Video */}
      <div className="w-[420px] h-[250px] rounded-xl overflow-hidden shadow-lg">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/zTK9DhM6OQc"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
       
       </div>



    </section>
      
  )
}

export default HeroSection;