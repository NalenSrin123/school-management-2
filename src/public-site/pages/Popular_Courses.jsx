import React from 'react'

function Popular_Courses() {
    const card = [
    {
      id: 1,
      img: "https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1",
      name_on_img: "STEM",
      name: "Advanced Mathematics",
      numstar: 4.9,
      num: 240,
      price: 89.0,
    },
    {
      id: 2,
      img: "https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1",
      name_on_img: "ARTS",
      name: "Creative Writing",
      numstar: 4.8,
      num: 185,
      price: 75.0,
    },
    {
      id: 3,
      img: "https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1",
      name_on_img: "HISTORY",
      name: "World History",
      numstar: 5.0,
      num: 312,
      price: 99.0,
    },
    {
      id: 4,
      img: "https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1",
      name_on_img: "SCIENCE",
      name: "Organic Chemistry",
      numstar: 4.7,
      num: 156,
      price: 120.0,
    },
  ];

  return (
    <div className="w-full px-6 py-10 bg-gray-50">
      <div className="text-blue-500 font-bold">RECOMMENDED</div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-gray-950 font-bold text-3xl">
          Popular Courses
        </div>

        <div className="text-blue-500 font-bold flex gap-2 items-center cursor-pointer hover:gap-3 transition-all">
          <div>Explore all programs</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" ><path fill="none" stroke="#0575d8" strokeWidth="2" d="M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4" /></svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {card.map((value) => (
          <div
            key={value.id}
            className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
            
            <div className="relative">
              <img src={value.img} alt={value.name} className="w-full h-52 object-cover" />
              <div className="absolute top-4 right-4 bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-500 hover:text-white transition"> {value.name_on_img}</div>
            </div>

            <div className="p-5 flex flex-col grow">
              <div className="font-bold text-lg mb-3">{value.name}</div>

              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path fill="#e1c603" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
                <div className="text-yellow-500 text-sm font-semibold">{value.numstar}</div>
                <div className="text-gray-600 text-sm">({value.num})</div>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center mt-5">
                <div className="font-bold text-blue-600 text-xl">${value.price.toFixed(2)}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-500 cursor-pointer hover:text-blue-500 transition" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" ><path d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular_Courses