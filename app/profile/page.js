// "use client";
// import { FaUserCircle } from "react-icons/fa";
// export default function ProfilePage() {
//   return (
//     <div className="bg-[#9aa285] min-h-screen p-6">
      
//       {/* Personal Info Section */}
//       <h2 className="text-xl font-semibold mb-4">Personal information</h2>

//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Form */}
//         <div className="space-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-24 font-medium">Name:</label>
//             <input
//               type="text"
//               className="bg-gray-200 rounded-md px-3 py-1 w-60 outline-none"
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="w-24 font-medium">Email Id:</label>
//             <input
//               type="email"
//               className="bg-gray-200 rounded-md px-3 py-1 w-60 outline-none"
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="w-24 font-medium">Phone No.:</label>
//             <input
//               type="text"
//               className="bg-gray-200 rounded-md px-3 py-1 w-60 outline-none"
//             />
//           </div>
//         </div>

//         {/* Profile Icon */}
//         <div className="flex justify-center items-center">
//           <div className="w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
//             <span className="text-6xl text-gray-300">👤</span>
//           </div>
//         </div>
//       </div>

//       {/* Courses Section */}
//       <h2 className="text-xl font-semibold mt-10 mb-4">My Courses</h2>

//       <div className="flex gap-6 flex-wrap">
        
//         {/* Course Card 1 */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden w-56">
//           <img
//             src="/course1.jpg" // put image in /public
//             alt="course"
//             className="w-full h-32 object-cover"
//           />
//           <div className="p-3">
//             <p className="font-semibold text-sm">Medical Astrology</p>
//             <button className="mt-2 bg-blue-500 text-white text-xs px-3 py-1 rounded">
//               VIDEOS
//             </button>
//           </div>
//         </div>

//         {/* Course Card 2 */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden w-56">
//           <img
//             src="/course2.jpg"
//             alt="course"
//             className="w-full h-32 object-cover"
//           />
//           <div className="p-3">
//             <p className="font-semibold text-sm">
//               Pulse Diagnosis Certificate Course
//             </p>
//             <button className="mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded">
//               LIVE
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






"use client";
import { FaUserCircle } from "react-icons/fa";
import React from "react"; // optional, but sometimes helpful
export default function ProfilePage() {
  return (
    <div className="bg-[#9aa285] min-h-screen p-6">
      
      {/* Personal Info Section */}
      <h2 className="text-xl font-semibold mb-4">Personal information</h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Form */}
        <div className="space-y-4">
          
          <div className="flex items-center gap-4">
            <label className="w-24 font-medium">Name:</label>
            <input
              type="text"
              value="Ayush Yogi"
              readOnly
              className="bg-black-200 rounded-md px-3 py-1 w-60 outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 font-medium">Email Id:</label>
            <input
              type="email"
              value="ayush@gmail.com"
              readOnly
              className="bg-black-200 rounded-md px-3 py-1 w-60 outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-24 font-medium">Phone No.:</label>
            <input
              type="text"
              value="9876543210"
              readOnly
              className="bg-black-200 rounded-md px-3 py-1 w-60 outline-none"
            />
          </div>

        </div>

        {/* Profile Icon */}
        <div className="flex justify-center items-center">
          <div className="w-40 h-40 rounded-full border-[10px] border-gray-200 flex items-center justify-center">
            <FaUserCircle className="text-7xl text-gray-300" />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <h2 className="text-xl font-semibold mt-10 mb-4">My Courses</h2>

      <div className="flex gap-6 flex-wrap">
        
        {/* Course Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-56">
          <img
            src="/course1.jpg"
            alt="course"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <p className="font-semibold text-sm">Medical Astrology</p>
            <button className="mt-2 bg-blue-500 text-white text-xs px-3 py-1 rounded">
              VIDEOS
            </button>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-56">
          <img
            src="/course2.jpg"
            alt="course"
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <p className="font-semibold text-sm">
              Pulse Diagnosis Certificate Course
            </p>
            <button className="mt-2 bg-red-500 text-white text-xs px-3 py-1 rounded">
              LIVE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}