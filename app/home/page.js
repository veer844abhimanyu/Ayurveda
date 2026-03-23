// "use client";

// // import Typewriter from "./components/Typewriter";
// import Typewriter from "../components/Typewriter";
// export default function HomePage() {
//   const words = [
//     "Welcome to MyApp",
//     "Learn Astrology Online",
//     "Join Pulse Diagnosis Courses"
//   ];

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-[#f0f0f0] text-2xl font-bold text-center px-4">
//       <h1>
//         <Typewriter words={words} speed={150} pause={1000} />
//       </h1>
//     </div>
//   );
// }









// "use client";

// import Typewriter from "../components/Typewriter"; // Corrected path

// export default function HomePage() {
//   const words = [
//     "Welcome to MyApp",
//     "Learn Astrology Online",
//     "Join Pulse Diagnosis Courses"
//   ];

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-[#f0f0f0] text-2xl font-bold text-center px-4">
//       <h1>
//         <Typewriter words={words} speed={150} pause={1000} />
//       </h1>
//     </div>
//   );
// }







// "use client";               // Must be first line for client-side component

// import Typewriter from "../components/Typewriter";  // Correct relative path

// export default function HomePage() {
//   const words = [
//     "Welcome to MyApp",
//     "Your journey to better health begins with a single conversation.",
//     "Have questions? We're here to guide you with care and wisdom.",
//     "Learn Astrology Online",
//     "Join Pulse Diagnosis Courses"
//   ];

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-black text-2xl font-bold text-center px-4">
//       <h1>
//         <Typewriter words={words} speed={150} pause={1000} />
//       </h1>
//       <h2>i am working fine</h2>
//     </div>
//   );
// }














"use client";

import Image from "next/image";
import AchievementSlider from "../components/components/AchievementSlider.js";
import Typewriter from "../components/Typewriter";

export default function HomePage() {

  const words = [
    "Welcome to MyApp",
    "Your journey to better health begins with a single conversation.",
    "Have questions? We're here to guide you with care and wisdom.",
    "Learn Astrology Online",
    "Join Pulse Diagnosis Courses"
  ];

  return (
    <div className="bg-[#A3A98B] min-h-screen">

      {/* 🔥 TYPEWRITER (TOP LEFT BELOW NAVBAR) */}
      <div className="px-20 md:px-8 pt-20">
        <h1 className="text-lg md:text-2xl font-bold text-[#0f3d3e]">
          <Typewriter words={words} speed={100} pause={1200} />
        </h1>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0f3d3e]">
            Explore Ayurveda Through Our Online Courses in India
          </h1>

          <p className="mt-4 text-gray-700">
            Learn pulse diagnosis and ayurveda deeply with experts.
          </p>

          {/* BUY NOW BUTTON */}
          <button className="mt-6 px-6 py-3 bg-[#0f3d3e] text-white rounded-lg hover:bg-[#092c2d]">
            Buy Now
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="md:w-1/2 w-full">
          <AchievementSlider />
        </div>

      </div>

      {/* COURSE CARD SECTION */}
      <div className="px-6 md:px-16 py-10">

        <h2 className="text-2xl font-bold text-center text-[#0f3d3e] mb-6">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <Image src="/course1.jpg" alt="course" width={300} height={200} className="rounded-md" />
            <h3 className="mt-3 font-semibold">Pulse Diagnosis</h3>
            <p className="text-sm text-gray-600">Learn Ayurveda pulse reading</p>

            <button className="mt-3 w-full bg-[#0f3d3e] text-white py-2 rounded-md hover:bg-[#092c2d]">
              Buy Now
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <Image src="/course2.jpg" alt="course" width={300} height={200} className="rounded-md" />
            <h3 className="mt-3 font-semibold">Ayurveda Basics</h3>
            <p className="text-sm text-gray-600">Understand body doshas</p>

            <button className="mt-3 w-full bg-[#0f3d3e] text-white py-2 rounded-md hover:bg-[#092c2d]">
              Buy Now
            </button>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <Image src="/course3.jpg" alt="course" width={300} height={200} className="rounded-md" />
            <h3 className="mt-3 font-semibold">Diet & Lifestyle</h3>
            <p className="text-sm text-gray-600">Balance your health</p>

            <button className="mt-3 w-full bg-[#0f3d3e] text-white py-2 rounded-md hover:bg-[#092c2d]">
              Buy Now
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}