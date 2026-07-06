// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "../ui/Button";
// import { Search } from "lucide-react";

// export default function SearchBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleSearch = () => {
//     if (query.trim()) {
//       console.log("Searching for:", query);
//       // 👉 You can call your API here
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center w-full max-w-sm">
//       {/* Search Icon Button */}
//       <Button
//         variant="outline"
//         size="icon"
//         onClick={handleToggle}
//         className="rounded-full shadow-md bg-white dark:bg-zinc-900 hover:bg-neutral-100 transition-all duration-300"
//       >
//         <Search className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
//       </Button>

//       {/* Animated Input */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 8, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="absolute top-12 w-full"
//           >
//             <div className="flex items-center space-x-2 bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg p-2">
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-sm"
//               />
//               <Button
//                 size="sm"
//                 variant="secondary"
//                 className="rounded-xl"
//                 onClick={handleSearch}
//               >
//                 Go
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "../ui/Button";
// import { Search } from "lucide-react";

// export default function SearchBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleToggle = () => setIsOpen((prev) => !prev);

//   const handleSearch = () => {
//     if (query.trim()) {
//       console.log("Searching for:", query);
//       setIsOpen(false); // close after search
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Search Icon Button */}
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={handleToggle}
//         className="flex items-center justify-center rounded-full bg-white/70 dark:bg-neutral-900/60
//         backdrop-blur-md shadow-[0_0_8px_rgba(0,0,0,0.08)]
//         border border-neutral-200 dark:border-neutral-800
//         p-2 hover:shadow-[0_0_12px_rgba(0,0,0,0.15)] transition-all duration-300"
//       >
//         <Search className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
//       </motion.button>

//       {/* Animated Search Input */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -5, scale: 0.96 }}
//             animate={{ opacity: 1, y: 10, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.96 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="absolute top-10 left-1/2 -translate-x-1/2 w-56 sm:w-64 md:w-72"
//           >
//             <div className="flex items-center rounded-2xl bg-white/80 dark:bg-neutral-900/80
//               backdrop-blur-xl border border-neutral-200 dark:border-neutral-700
//               shadow-[0_4px_14px_rgba(0,0,0,0.1)] px-3 py-1.5">
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="flex-1 border-none bg-transparent focus-visible:ring-0 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
//               />
//               <Button
//                 size="sm"
//                 variant="secondary"
//                 onClick={handleSearch}
//                 className="text-xs rounded-xl px-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
//               >
//                 Go
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

"use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/Button";
// import { Search } from "lucide-react";

// interface SearchBarProps {
//   className?: string; // <-- ✅ Add this
// }
// export default function SearchBar({ className }: SearchBarProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleToggle = () => setIsOpen((prev) => !prev);

//   const handleSearch = () => {
//     if (query.trim()) {
//       console.log("Searching for:", query);
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Search Icon */}
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={handleToggle}
//         className="flex items-center justify-center rounded-full
//           bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md
//           border border-neutral-200 dark:border-neutral-800
//           shadow-[0_0_8px_rgba(0,0,0,0.08)]
//           hover:bg-neutral-100 dark:hover:bg-neutral-800
//           transition-all duration-300 p-2"
//       >
//         <Search className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
//       </motion.button>

//       {/* Animated Input */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -5, scale: 0.96 }}
//             animate={{ opacity: 1, y: 10, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.96 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="absolute top-10 left-1/2 -translate-x-1/2 w-56 sm:w-64 md:w-72"
//           >
//             <div
//               className="flex items-center rounded-2xl
//                 bg-white/90 dark:bg-neutral-900/85
//                 border border-neutral-200 dark:border-neutral-700
//                 backdrop-blur-xl shadow-[0_4px_14px_rgba(0,0,0,0.1)]
//                 hover:border-neutral-300 dark:hover:border-neutral-600
//                 transition-all duration-300 px-3 py-1.5"
//             >
//               <Input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="flex-1 border-none bg-transparent focus-visible:ring-0 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
//               />
//               <Button
//                 size="sm"
//                 variant="secondary"
//                 onClick={handleSearch}
//                 className="text-xs rounded-xl px-3 bg-neutral-100 dark:bg-neutral-800
//                   hover:bg-neutral-200 dark:hover:bg-neutral-700
//                   focus-visible:ring-2 focus-visible:ring-neutral-300 dark:focus-visible:ring-neutral-600
//                   transition-all duration-200"
//               >
//                 Go
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/Button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsOpen(false);
    }
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* 🔍 Search Icon Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleToggle}
        className="rounded-full shadow-md bg-white dark:bg-zinc-900 hover:bg-neutral-100 transition-all duration-300"
      >
        <Search className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      </Button>

      {/* 🔄 Animated Input Field */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 12, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[80vw] max-w-xs sm:max-w-sm"
          >
            <div
              className="flex items-center space-x-2 bg-white dark:bg-zinc-900 border 
                         border-neutral-200 dark:border-neutral-700 rounded-2xl 
                         shadow-lg p-2 hover:border-blue-500 transition-all duration-300"
            >
              <Input
                type="text"
                placeholder="Search City"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:outline-none hover:bg-transparent 
                           text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
              />
              <Button
                size="sm"
                variant="secondary"
                className="rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                onClick={handleSearch}
              >
                Go
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
