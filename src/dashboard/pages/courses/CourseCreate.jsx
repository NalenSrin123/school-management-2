import { useEffect, useMemo, useState } from "react";

const BASE_URL = "http://school-management-2-5-main-cdrucp.laravel.cloud/api";

const GRADIENTS = [
  "from-slate-900 to-blue-950",
  "from-amber-50 to-orange-100",
  "from-stone-800 to-zinc-900",
  "from-orange-100 to-amber-200",
  "from-indigo-900 to-violet-950",
  "from-rose-900 to-pink-950",
  "from-cyan-900 to-sky-950",
  "from-emerald-900 to-green-950",
];

const ICONS = ["∑", "✍", "🏛", "⚗", "⚛", "🎨", "🧬", "📜"];

const CATEGORY_STYLES = {
  stem: "bg-blue-600",
  science: "bg-orange-500",
  history: "bg-teal-600",
  arts: "bg-purple-600",
  default: "bg-slate-600",
};

function mapCategoryBadgeColor(category = "") {
  const normalized = String(category).toLowerCase();
  return CATEGORY_STYLES[normalized] || CATEGORY_STYLES.default;
}

function mapCourse(item, index) {
  const category = item?.category || item?.department || "General";
  const reviews = Number(
    item?.reviews_count ?? item?.reviews ?? item?.review_count ?? 0,
  );
  const rating = Number(item?.rating ?? item?.average_rating ?? 0);
  const price = Number(item?.price ?? item?.course_fee ?? item?.fee ?? 0);

  return {
    id: item?.id ?? index + 1,
    title: item?.title || item?.name || `Course ${index + 1}`,
    image: item?.image || "",
    category,
    rating,
    reviews,
    price,
    badge: String(category).toUpperCase(),
    badgeColor: mapCategoryBadgeColor(category),
    bg: GRADIENTS[index % GRADIENTS.length],
    icon: ICONS[index % ICONS.length],
  };
}

async function getAllCourses() {
  const response = await fetch(`${BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses.");
  }

  const payload = await response.json();
  // Support common API response envelopes and paginated payloads.
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.data)) return payload.data.data;
  return [];
}

function Rating({ rating }) {
  const safeRating = Number.isFinite(rating) ? rating : 0;

  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400 text-sm">★</span>
      <span className="text-sm font-semibold text-yellow-500">
        {safeRating.toFixed(1)}
      </span>
    </div>
  );
}

function CourseCard({ course }) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 flex flex-col">
      <div className="relative h-44 overflow-hidden">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${course.bg} flex items-center justify-center`}
          >
            <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
              {course.icon}
            </span>
          </div>
        )}
        <span
          className={`absolute top-3 left-3 text-white text-xs font-bold tracking-widest px-2.5 py-1 rounded-full ${course.badgeColor}`}
        >
          {course.badge}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <div className="flex items-center gap-2">
          <Rating rating={course.rating} />
          <span className="text-xs text-gray-400">
            ({course.reviews} Reviews)
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-blue-600 font-bold text-lg">
            ${course.price}.00
          </span>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2 rounded-lg transition-all duration-200 ${bookmarked ? "text-blue-600 bg-blue-50" : "text-gray-300 hover:text-blue-400 hover:bg-blue-50"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill={bookmarked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
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
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadCourses = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getAllCourses();
        if (!isMounted) return;
        setCourses(data.map((item, index) => mapCourse(item, index)));
      } catch (err) {
        if (!isMounted) return;
        setError(
          err instanceof Error ? err.message : "Unable to load courses.",
        );
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadCourses();

    return () => {
      isMounted = false;
    };
  }, []);

  const initialVisibleCount = 4;
  const filteredCourses = useMemo(
    () =>
      courses.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [courses, search],
  );

  const visibleCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, initialVisibleCount);

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
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-medium">Loading courses...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">
            <p className="text-lg font-medium">{error}</p>
          </div>
        ) : visibleCourses.length > 0 ? (
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
