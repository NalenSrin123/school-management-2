const instructors = [
  {
    id: 1,
    img: "https://img1.wsimg.com/isteam/ip/4487bfb2-196c-4e90-94ff-b714ab644267/Jenkins_2024%20headshot.jpg/:/cr=t:10.28%25,l:0%25,w:100%25,h:66.68%25/rs=w:365,h:365,cg:true",
    name: "Dr. Sarah Jenkins",
    position: "Head of Mathematics",
    detail: "Ph.D in Applied Mathematics, 15+ years of teaching experience.",
  },
  {
    id: 2,
    img: "https://www.valuepartners-group.com/wp-content/uploads/2016/05/Pix_MichaelChen_5531r3.jpg",
    name: "Prof. Michael Chen",
    position: "Literature & Creative Writing",
    detail: "Award-winning novelist and literature critic.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8RRmWkYeMZpZ2kE0RFCy-jp9t0LBXzvBDw&s",
    name: "Elena Rodriguez",
    position: "Historical Sciences",
    detail: "Expert in medieval civilizations and archeology.",
  },
  {
    id: 4,
    img: "https://i.redd.it/robert-sean-leonard-as-dr-james-wilson-in-house-v0-036efks98d8d1.jpg?width=684&format=pjpg&auto=webp&s=a6cda6014487493d2ef2ad1105e6bc19092911cd",
    name: "Dr. James Wilson",
    position: "Computer Science Lead",
    detail: "Former software architect with a passion for pedagogy.",
  },
];

function Instructor() {
  return (
    <section className="w-full px-4 py-12">
      {/* Header */}
      <p className="text-center text-xs font-medium tracking-widest uppercase text-blue-600 mb-1">
        Meet the Faculty
      </p>
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
        Our Expert Instructors
      </h2>

      {/* Responsive grid: 1 col → 2 col → 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-colors duration-200"
          >
            <img
              src={instructor.img}
              alt={instructor.name}
              className="w-full aspect-square object-cover object-top"
            />
            <div className="p-4">
              <p className="font-bold text-gray-900 text-lg leading-tight">
                {instructor.name}
              </p>
              <p className="text-blue-500 text-sm font-medium mt-1">
                {instructor.position}
              </p>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {instructor.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Instructor;