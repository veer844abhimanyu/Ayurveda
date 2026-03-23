// "use client";
// import { useState, useEffect } from "react";

// export default function Typewriter({ words = [], speed = 150, pause = 1000 }) {
//   const [index, setIndex] = useState(0);       // Which word is active
//   const [subIndex, setSubIndex] = useState(0); // How many letters typed
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     if (words.length === 0) return;

//     const timeout = setTimeout(() => {
//       const currentWord = words[index];

//       if (isDeleting) {
//         setSubIndex(subIndex - 1);
//       } else {
//         setSubIndex(subIndex + 1);
//       }

//       // If word finished typing
//       if (!isDeleting && subIndex === currentWord.length) {
//         setTimeout(() => setIsDeleting(true), pause);
//       }
//       // If word finished deleting
//       else if (isDeleting && subIndex === 0) {
//         setIsDeleting(false);
//         setIndex((index + 1) % words.length); // Go to next word
//       }
//     }, isDeleting ? speed / 2 : speed);

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, isDeleting, words, speed, pause]);

// //   return (
// //     <span>
// //       {/* {words[index].substring(0, subIndex)}
// //          */}
// //          {words.length > 0 ? words[index].substring(0, subIndex) : ""}
// //       {/* Inline blinking cursor */}
// //       <span style={{
// //         display: "inline-block",
// //         width: "1ch",
// //         animation: "blink 0.7s infinite"
// //       }}>|</span>

// //       {/* Inline keyframes */}
// //       <style jsx>{`
// //         @keyframes blink {
// //           0%, 50%, 100% { opacity: 1; }
// //           25%, 75% { opacity: 0; }
// //         }
// //       `}</style>
// //     </span>
// //   );








// return (
//   <span>
//     {words.length > 0 ? words[index].substring(0, subIndex) : ""}

//     <span
//       style={{
//         display: "inline-block",
//         width: "1ch",
//         animation: "blink 0.7s infinite",
//       }}
//     >
//       |
//     </span>

//     <style jsx>{`
//       @keyframes blink {
//         0%, 50%, 100% { opacity: 1; }
//         25%, 75% { opacity: 0; }
//       }
//     `}</style>
//   </span>
// );
// }












"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ words = [], speed = 150, pause = 1000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[index] || "";

  useEffect(() => {
    if (!currentWord) return;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setSubIndex((prev) => prev - 1);
      } else {
        setSubIndex((prev) => prev + 1);
      }

      if (!isDeleting && subIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, currentWord, words.length, speed, pause]);

  return (
    <span>
      {currentWord.substring(0, subIndex)}
      <span style={{ marginLeft: "2px" }}>|</span>
    </span>
  );
}