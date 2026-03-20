export default function SettingModal() {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div className="bg-white w-[full]  rounded-xl shadow-lg p-6">


                <div className="bg-gray-50 p-5 rounded-lg">

                    <div className="flex gap-5">

                        {/* Profile Image + Camera */}
                        <div className="relative">
                            <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                                <img
                                    src="https://i.pinimg.com/1200x/44/4a/4a/444a4a22b67d9ab52c108fa27a6bc0c3.jpg"
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                    alt="Profile"
                                />
                            </div>

                            {/* Camera Icon */}
                            <div className="absolute bottom-95 right-0 bg-purple-600 p-1 rounded-full border-2 border-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3.5 h-3.5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7h4l2-2h6l2 2h4v12H3V7z"
                                    />
                                    <circle cx="12" cy="13" r="3" />
                                </svg>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="flex-1 space-y-3">

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-black">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Yoshikage"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-black">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Kira"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-black">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="YoshikageKira@gmail.com"
                                    className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-xs text-black">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="+84 789 373 568"
                                    className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                />
                            </div>

                            <h3 className="text-sm font-semibold pt-1">Personal Address</h3>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-black">Country</label>
                                    <input
                                        type="text"
                                        placeholder="Vietnam"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-black">City</label>
                                    <input
                                        type="text"
                                        placeholder="Hai Phong"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs text-black">Address</label>
                                    <input
                                        type="text"
                                        placeholder="Hong Bang"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-black">Zip Code</label>
                                    <input
                                        type="text"
                                        placeholder="180000"
                                        className="w-full border-1 border-gray-400 rounded-md px-2 py-1.5 mt-1 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-3">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-1.5 rounded-full text-sm">
                                    Save Changes
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}