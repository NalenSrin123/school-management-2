import React from "react";

function Instructor() {
  const card = [
    {
      id: 1,
      img: "https://img1.wsimg.com/isteam/ip/4487bfb2-196c-4e90-94ff-b714ab644267/Jenkins_2024%20headshot.jpg/:/cr=t:10.28%25,l:0%25,w:100%25,h:66.68%25/rs=w:365,h:365,cg:true",
      name: "Dr. Sarah Jenkins",
      position: "Head of Mathematics",
      detail: "Ph.D in Applied Mathematics, 15+ years of teaching experience",
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

  return (
    <div className="w-full mt-12 mb-[50px] px-4">
      
      {/* Title */}
      <div className="text-blue-600 text-center text-sm font-semibold">
        MEET THE FACULTY
      </div>

      <div className="font-bold text-black text-3xl text-center mt-2">
        Our Expert Instructors
      </div>

      {/* Instructor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {card.map((value) => (
          <div
            key={value.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4"
          >
            <img
              src={value.img}
              alt={value.name}
              className="w-full h-[260px] object-cover rounded-xl"
            />

            <div className="mt-4">
              <div className="font-bold text-lg text-black">
                {value.name}
              </div>

              <div className="text-blue-500 text-sm mt-1">
                {value.position}
              </div>

              <div className="text-gray-600 text-sm mt-2">
                {value.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Instructor;