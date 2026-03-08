export default function About() {
  return (
    <div className="bg-gray-100 py-20 px-6">

  
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-500 text-xs font-semibold tracking-widest">
          OUR JOURNEY
        </p>

        <h2 className="text-3xl font-bold mt-2 mb-16">
          Key Milestones
        </h2>

        <div className="relative">

         
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

    
          <div className="grid grid-cols-2 items-center mb-14">
            <div className="text-right pr-10">
              <h3 className="font-semibold text-lg">
                Founded with a Vision
              </h3>
              <p className="text-gray-500 text-sm">
                EduManage was established with the goal of bridging the gap
                between traditional schooling and modern digital needs.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 -translate-x-1/2 bg-white border-4 border-blue-500 text-blue-500 text-xs font-bold px-3 py-2 rounded-full">
                2018
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="grid grid-cols-2 items-center mb-14">
            <div></div>

            <div className="pl-10">
              <h3 className="font-semibold text-lg">
                Global Expansion
              </h3>
              <p className="text-gray-500 text-sm">
                Reached 1,000 partner schools across 15 countries,
                implementing our first cloud-based management platform.
              </p>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 text-blue-500 text-xs font-bold px-3 py-2 rounded-full">
              2020
            </div>
          </div>

          <div className="grid grid-cols-2 items-center mb-14">
            <div className="text-right pr-10">
              <h3 className="font-semibold text-lg">
                Innovation Award
              </h3>
              <p className="text-gray-500 text-sm">
                Recognized as the most innovative EdTech startup
                for our unique student performance tracking AI.
              </p>
            </div>

            <div></div>

            <div className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 text-blue-500 text-xs font-bold px-3 py-2 rounded-full">
              2022
            </div>
          </div>

         
          <div className="grid grid-cols-2 items-center">
            <div></div>

            <div className="pl-10">
              <h3 className="font-semibold text-lg">
                SaaS Transformation
              </h3>
              <p className="text-gray-500 text-sm">
                Launched our full enterprise SaaS suite,
                empowering over 5 million students globally.
              </p>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bg-white border-4 border-blue-500 text-blue-500 text-xs font-bold px-3 py-2 rounded-full">
              2024
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 text-center">

        <p className="text-blue-500 text-xs font-semibold tracking-widest">
          BOARD OF DIRECTORS
        </p>

        <h2 className="text-3xl font-bold mt-2 mb-14">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 font-semibold">Jonathan Edwards</h4>
            <p className="text-blue-500 text-sm">Chief Executive Officer</p>
          </div>

          <div>
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 font-semibold">Linda Harrison</h4>
            <p className="text-blue-500 text-sm">Chief Academic Officer</p>
          </div>

          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 font-semibold">Marcus Vane</h4>
            <p className="text-blue-500 text-sm">Chief Technology Officer</p>
          </div>

          <div>
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-28 h-28 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 font-semibold">Sarah Collins</h4>
            <p className="text-blue-500 text-sm">Head of Operations</p>
          </div>

        </div>
      </div>

    </div>
  );
}