"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

/**
 * MobileSidebar component provides a mobile-friendly sidebar navigation
 * with a toggle button for opening and closing the sidebar.
 * Utilizes framer-motion for animations and TailwindCSS for styling.
 * @returns {JSX.Element} - JSX element representing the MobileSidebar.
 */
export default function MobileSidebar() {
  // State to manage the visibility of the sidebar
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false);

  /**
   * Toggles the visibility of the sidebar.
   */
  const handleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  return (
    <>
      {/* Button to open the sidebar */}
      <button
        aria-label="Open Sidebar"
        onClick={handleAside}
        className="fixed sm:hidden z-50 top-4 left-4"
      >
        <MdMenu className="text-4xl text-black p-2 bg-mainOrange rounded-full" />
      </button>

      {/* AnimatePresence for handling animations */}
      <AnimatePresence>
        {isAsideVisible && (
          <motion.aside
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100vw" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-1/2 bg-mainOrange hover:border-blue-500 to-mainDarkBlue z-50"
          >
            <nav className="relative">
              {/* Sidebar title */}
              <h5 className={`text-black font-medium w-1/2 p-4`}>CAVE</h5>

              {/* Sidebar navigation links */}
              <ul className="gap-4 flex flex-col mt-4">
                <Link
                  className="w-full hover:bg-mainDarkBlue duration-200 group p-2 px-4 text-black font-medium text-sm"
                  href="/ss"
                >
                  Link
                </Link>

                {/* Additional Link elements can be added as needed */}
              </ul>

              {/* Button to close the sidebar */}
              <button
                className="absolute top-0 right-0 p-4"
                onClick={handleAside}
              >
                <IoMdClose className="text-black text-2xl top-2" />
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
