import React, { useState } from "react";

const videos = [
  { id: 1, title: "HTML5", category: "Front-end", price: 0.99, url: "https://www.youtube.com/embed/qz0aGYrrlhU" },
  { id: 2, title: "CSS3", category: "Front-end", price: 12, url: "https://www.youtube.com/embed/OXGznpKZ_sA" },
  { id: 3, title: "Javascript", category: "Front-end", price: 23, url: "https://www.youtube.com/embed/a-wVHL0lpb0" },
  { id: 4, title: "React Js", category: "Front-end", price: 15, url: "https://www.youtube.com/embed/SqcY0GlETPk" },
  { id: 5, title: "Tailwind CSS", category: "Front-end", price: 9, url: "https://www.youtube.com/embed/ft30zcMlFao" },
  { id: 6, title: "Git & Github", category: "Tool", price: 6, url: "https://www.youtube.com/embed/qX30DbpSSjo" },
  { id: 7, title: "PHP", category: "Back-end", price: 35, url: "https://www.youtube.com/embed/zZ6vybT1HQs" },
  { id: 8, title: "Laravel12", category: "Back-end", price: 89, url: "https://www.youtube.com/embed/0M84Nk7iWkA" },
];

function VideoSection() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  // Filter videos based on search input
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  // Show first 4 videos by default, show all when toggled
  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 4);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: Title & Subtitle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              RESOURCES & LEARNING
            </span>

            <h1 className="text-5xl font-bold mt-6 text-gray-900">
              Educational<span className="text-blue-600"> Video</span> Guides
            </h1>

            <p className="text-gray-600 mt-6">
              Master our platform with step-by-step tutorials and insights into
              campus life and student success strategies.
            </p>
          </div>
        </div>

        {/* Search for Videos */}
        <div className="mb-6 flex justify-center md:justify-start">
          <input
            type="text"
            placeholder="Search for videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayedVideos.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="w-full h-[160px]">
                <iframe
                  className="w-full h-full"
                  src={item.url}
                  title={item.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <h2 className="font-bold text-lg mt-2">{item.title}</h2>
                <p className="text-gray-500 text-sm">({Math.floor(Math.random() * 300)} Reviews)</p>
                <p className="text-blue-600 font-bold mt-2">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Collapse Button */}
        {filteredVideos.length > 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              {showAll ? "Show Less" : "Show More"} 
              <span className="text-xl">{showAll ? "↑" : "↓"}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default VideoSection;