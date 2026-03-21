// export default function Footer() {
//   return (
//     <footer className="bg-[#0f3d3e] text-white px-10 py-10 mt-10">

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">AYUSH YOGI</h2>
//           <p className="text-sm text-gray-300">
//             Bringing balance to life through Ayurveda, Yoga, and natural healing.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">About</li>
//             <li className="hover:text-white cursor-pointer">Courses</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="font-semibold mb-3">Contact</h3>
//           <p className="text-sm text-gray-300">📧 ayushyogi@gmail.com</p>
//           <p className="text-sm text-gray-300">📞 +91 9876543210</p>

//           <p className="text-sm mt-4 italic text-gray-400">
//             "Balance your body, calm your mind, and nourish your soul."
//           </p>
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-400">
//         © {new Date().getFullYear()} AYUSH YOGI. All rights reserved.
//       </div>

//     </footer>
//   );
// }






"use client";

import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6f8f88] text-white pt-12 pb-6 px-6 md:px-16">
      
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-3 gap-10 border-b border-white/30 pb-10">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">AYUSH YOGI</h2>
          <p className="text-sm mb-6 opacity-80">
            Empower your journey with knowledge and wisdom.
          </p>

          <div className="flex gap-4 text-xl">
            <FaYoutube className="cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Workshops</p>
            <p className="hover:underline cursor-pointer">Courses</p>
            <p className="hover:underline cursor-pointer">Yoga</p>
          </div>

          <div className="space-y-2">
            <p className="hover:underline cursor-pointer">Blog</p>
            <p className="hover:underline cursor-pointer">Team</p>
            <p className="hover:underline cursor-pointer">Contact</p>
            <p className="hover:underline cursor-pointer">Login</p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="mb-4 font-medium">Join our Newsletter</h3>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mb-3 px-4 py-2 rounded-full bg-transparent border border-white outline-none"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-3 px-4 py-2 rounded-full bg-transparent border border-white outline-none"
          />

          <button className="bg-white text-[#6f8f88] px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Subscribe →
          </button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm opacity-80">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>© 2026 AYUSH YOGI. All rights reserved.</p>
      </div>

    </footer>
  );
}