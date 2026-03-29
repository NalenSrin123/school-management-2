import { useState } from "react";

const courses = [
  { id: 1, title: "Advanced Mathematics", category: "STEM", rating: 4.9, reviews: 240, price: 89, badge: "STEM", badgeColor: "bg-blue-600", bg: "from-slate-900 to-blue-950", icon: "∑" },
  { id: 2, title: "Creative Writing", category: "Arts", rating: 4.8, reviews: 185, price: 75, badge: "ARTS", badgeColor: "bg-purple-600", bg: "from-amber-50 to-orange-100", icon: "✍", dark: false },
  { id: 3, title: "World History", category: "History", rating: 5.0, reviews: 312, price: 99, badge: "HISTORY", badgeColor: "bg-teal-600", bg: "from-stone-800 to-zinc-900", icon: "🏛" },
  { id: 4, title: "Organic Chemistry", category: "Science", rating: 4.7, reviews: 156, price: 120, badge: "SCIENCE", badgeColor: "bg-orange-500", bg: "from-orange-100 to-amber-200", icon: "⚗", dark: false },
  { id: 5, title: "Quantum Physics", category: "STEM", rating: 4.9, reviews: 92, price: 110, badge: "STEM", badgeColor: "bg-blue-600", bg: "from-indigo-900 to-violet-950", icon: "⚛" },
  { id: 6, title: "Renaissance Art History", category: "History", rating: 4.6, reviews: 45, price: 65, badge: "HISTORY", badgeColor: "bg-teal-600", bg: "from-rose-900 to-pink-950", icon: "🎨" },
  { id: 7, title: "Molecular Biology", category: "Science", rating: 4.8, reviews: 128, price: 95, badge: "SCIENCE", badgeColor: "bg-orange-500", bg: "from-cyan-900 to-sky-950", icon: "🧬" },
  { id: 8, title: "Shakespeare Studies", category: "Arts", rating: 5.0, reviews: 210, price: 80, badge: "ARTS", badgeColor: "bg-purple-600", bg: "from-emerald-900 to-green-950", icon: "📜" },
];

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400 text-sm">★</span>
      <span className="text-sm font-semibold text-yellow-500">{rating.toFixed(1)}</span>
    </div>
  );
}

function CourseCard({ course }) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 flex flex-col">
      <div className={`relative h-44 bg-gradient-to-br ${course.bg} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">{course.icon}</span>
        <span className={`absolute top-3 left-3 text-white text-xs font-bold tracking-widest px-2.5 py-1 rounded-full ${course.badgeColor}`}>{course.badge}</span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h3>
        <div className="flex items-center gap-2">
          <Rating rating={course.rating} />
          <span className="text-xs text-gray-400">({course.reviews} Reviews)</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-blue-600 font-bold text-lg">${course.price}.00</span>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-lg transition-all duration-200 ${bookmarked ? "text-blue-600 bg-blue-50" : "text-gray-300 hover:text-blue-400 hover:bg-blue-50"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseCatalog() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const initialVisibleCount = 4; // ចំនួន course ចាប់ផ្ដើមបង្ហាញ
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const visibleCourses = showAll ? courses : filteredCourses.slice(0, initialVisibleCount);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 mt-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Courses
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Search or click “Show All” to see all courses.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[600px] pl-4 pr-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
        </div>

        {/* Grid */}
        {visibleCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-lg font-medium">No courses found</p>
          </div>
        )}

        {/* Show All Button */}
        {!showAll && filteredCourses.length > initialVisibleCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Show All Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
}