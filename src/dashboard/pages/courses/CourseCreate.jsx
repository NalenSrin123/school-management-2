import { useState } from "react";

const courses = [
  {
    id: 1, title: "Advanced Mathematics", category: "STEM",
    rating: 4.9, reviews: 240, price: 89,
    badge: "STEM", badgeColor: "bg-blue-600",
    bg: "from-slate-900 to-blue-950",
    icon: "∑",
  },
  {
    id: 2, title: "Creative Writing", category: "Arts",
    rating: 4.8, reviews: 185, price: 75,
    badge: "ARTS", badgeColor: "bg-purple-600",
    bg: "from-amber-50 to-orange-100",
    icon: "✍",
    dark: false,
  },
  {
    id: 3, title: "World History", category: "History",
    rating: 5.0, reviews: 312, price: 99,
    badge: "HISTORY", badgeColor: "bg-teal-600",
    bg: "from-stone-800 to-zinc-900",
    icon: "🏛",
  },
  {
    id: 4, title: "Organic Chemistry", category: "Science",
    rating: 4.7, reviews: 156, price: 120,
    badge: "SCIENCE", badgeColor: "bg-orange-500",
    bg: "from-orange-100 to-amber-200",
    icon: "⚗",
    dark: false,
  },
  {
    id: 5, title: "Quantum Physics", category: "STEM",
    rating: 4.9, reviews: 92, price: 110,
    badge: "STEM", badgeColor: "bg-blue-600",
    bg: "from-indigo-900 to-violet-950",
    icon: "⚛",
  },
  {
    id: 6, title: "Renaissance Art History", category: "History",
    rating: 4.6, reviews: 45, price: 65,
    badge: "HISTORY", badgeColor: "bg-teal-600",
    bg: "from-rose-900 to-pink-950",
    icon: "🎨",
  },
  {
    id: 7, title: "Molecular Biology", category: "Science",
    rating: 4.8, reviews: 128, price: 95,
    badge: "SCIENCE", badgeColor: "bg-orange-500",
    bg: "from-cyan-900 to-sky-950",
    icon: "🧬",
  },
  {
    id: 8, title: "Shakespeare Studies", category: "Arts",
    rating: 5.0, reviews: 210, price: 80,
    badge: "ARTS", badgeColor: "bg-purple-600",
    bg: "from-emerald-900 to-green-950",
    icon: "📜",
  },
];

const CATEGORIES = ["All Courses", "STEM", "Arts", "History", "Science", "Language"];

function CourseCreate({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400 text-sm">★</span>
      <span className="text-sm font-semibold text-yellow-500">{rating.toFixed(1)}</span>
    </div>
  );
}

function CourseCard({ course }) {
  const [bookmarked, setBookmarked] = useState(false);
  const isDark = course.dark !== false;

  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 flex flex-col">
      {/* Thumbnail */}
      <div className={`relative h-44 bg-linear-to-br ${course.bg} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
          {course.icon}
        </span>
        <span className={`absolute top-3 left-3 text-white text-xs font-bold tracking-widest px-2.5 py-1 rounded-full ${course.badgeColor}`}>
          {course.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-2">
          <div rating={course.rating} />
          <span className="text-xs text-gray-400">({course.reviews} Reviews)</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-blue-600 font-bold text-lg">${course.price}.00</span>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-lg transition-all duration-200 ${
              bookmarked
                ? "text-blue-600 bg-blue-50"
                : "text-gray-300 hover:text-blue-400 hover:bg-blue-50"
            }`}
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
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === "All Courses" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6 mt-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Courses
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Choose from hundreds of academic programs designed to prepare you for the future.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 items-start sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for courses..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>

          {/* Category Pills - scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide w-full sm:w-auto flex-nowrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-lg font-medium">No courses found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
          >
            ‹
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg font-semibold text-sm transition-all ${
                currentPage === p
                  ? "bg-blue-600 text-white shadow"
                  : "border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {p}
            </button>
          ))}
          <span className="text-gray-400 text-sm px-1">...</span>
          <button
            onClick={() => setCurrentPage(12)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg font-semibold text-sm transition-all ${
              currentPage === 12
                ? "bg-blue-600 text-white shadow"
                : "border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            12
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
          >
            ›
          </button>
        </div>

      </div>
    </div>
  );
}

