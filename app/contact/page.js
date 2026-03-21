import Image from "next/image";


export default function ContactPage() {
  return (
    <div className="bg-[#A3A98B] min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-[#0f3d3e] text-white flex justify-between items-center px-10 py-3">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          AYUSH YOGI
        </div>

        <ul className="flex gap-8 text-sm">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>COURSE</li>
          <li>CONTACT</li>
          <li>LOGIN</li>
        </ul>
      </nav>

      {/* MAIN */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-16 gap-10">

        {/* LEFT FORM */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[#0f3d3e] text-2xl font-bold mb-6">Contact</h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-md bg-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Id"
              className="p-2 rounded-md bg-white outline-none"
            />

            <textarea
              placeholder="Comment"
              rows="4"
              className="p-2 rounded-md bg-white outline-none"
            />

            <button className="bg-[#0f3d3e] text-white py-2 rounded-md hover:bg-[#092c2d]">
              Send Message
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <Image src="/logo.png" alt="logo" width={120} height={120} />

          <p className="text-sm text-black max-w-md leading-6 mt-6">
            "Your journey to better health begins with a single conversation."
            <br /><br />
            "Have questions? We're here to guide you with care and wisdom."
            <br /><br />
            "Let’s connect and bring balance back to your life."
            <br /><br />
            "Every question matters—reach out, and we’ll help you find clarity."
          </p>
        </div>
          
      </div>
    </div>
  );
}