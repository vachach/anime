import React, { useState, useRef, useEffect } from "react";
import AuthModal from "../Auth/AuthModal";

const Header = () => {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
  };

  const handleOutsideClick = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target) && event.target !== document.querySelector('.md\\:hidden.text-xl > i')) {
      setIsMobileSearchVisible(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isMobileSearchVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileSearchVisible]);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="bg-[#c4c4c4] w-32 rounded-lg flex items-center justify-center space-x-2"
        >
          <img
            src="/logo.svg"
            alt="Vachach Anime"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Search (Desktop) */}
        <form
          action="/search"
          className="hidden md:flex items-center w-full max-w-md"
        >
          <input
            type="text"
            name="keyword"
            placeholder="Enter anime name"
            className="flex-grow px-4 py-3 rounded-l-md bg-gray-800 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-md"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>

        {/* Sign in and Mobile Search */}
        <div className="flex items-center ">
          {/* Mobile search icon */}
          <button className="md:hidden text-xl px-4" onClick={toggleMobileSearch}>
            <i className="fas fa-search"></i>
          </button>

          {/* Sign in button */}
          <button
            className="bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded text-sm font-medium"
            onClick={openModal}
          >
            Sign in
          </button>

          <AuthModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>

      {/* Mobile Search Input */}
      {isMobileSearchVisible && (
        <div
          ref={searchInputRef}
          className="md:hidden px-4 py-2 bg-gray-900 border-t border-gray-800"
        >
          <form action="/search" className="flex items-center w-full">
            <input
              type="text"
              name="keyword"
              placeholder="Enter anime name"
              className="flex-grow px-4 py-3 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-md"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;