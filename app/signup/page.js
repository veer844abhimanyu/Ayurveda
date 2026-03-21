import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-[#A3A98B] min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-[#0f3d3e] text-white flex justify-between items-center px-10 py-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          AYUSH YOGI
        </div>

        <ul className="flex gap-8 text-sm">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/course">COURSE</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/login">LOGIN / SIGN UP</Link></li>
        </ul>
      </nav>

      {/* MAIN */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 gap-10">

        {/* LEFT SIGNUP BOX */}
        <div className="bg-[#c2c4b7] p-8 rounded-xl shadow-lg w-full md:w-[400px]">
          <h2 className="text-center text-xl font-bold mb-6">Sign Up</h2>

          <div className="flex flex-col gap-4">

            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-white outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-white outline-none"
              />
            </div>

            <div>
              <label className="text-sm">User Id</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-white outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                className="w-full p-2 rounded-md bg-white outline-none"
              />
            </div>

            <button className="bg-[#0f3d3e] text-white py-2 rounded-md hover:bg-[#092c2d]">
              Sign Up
            </button>

            <p className="text-xs">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Login here
              </Link>
            </p>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE + TEXT */}
        <div className="flex flex-col items-center text-center">
          <Image src="/ganesh.png" alt="ganesh" width={150} height={150} />

          <p className="text-blue-600 text-sm mt-4">
            Start your journey to Good Health
          </p>
        </div>

      </div>
    </div>
  );
}