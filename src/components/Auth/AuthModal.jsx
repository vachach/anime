import React, { useState } from 'react';

// Ushbu komponent modalni ko'rsatish/yashirish (isOpen)
// va yopish funksiyasini (onClose) props orqali qabul qiladi.
function AuthModal({ isOpen, onClose }) {
  const [isLoginView, setIsLoginView] = useState(true); // Qaysi formani ko'rsatishni boshqaradi

  if (!isOpen) {
    return null; // Agar isOpen false bo'lsa, hech narsa ko'rsatmaymiz
  }

  return (
    // Modal uchun qora fon (overlay)
    <div className="fixed m-0 p-0 inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* Modalning o'zi */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        {/* Yopish tugmasi */} 
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times; {/* 'X' belgisi */}
        </button>

        {/* Tablar yoki sarlavhalar */}
        <div className="flex border-b mb-4">
          <button
            className={`py-2 px-4 rounded-tl-lg ${isLoginView ? 'bg-purple-600 border-b-2 border-purple-600 font-semibold' : 'text-gray-500 hover:bg-purple-300'}`}
            onClick={() => setIsLoginView(true)}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 rounded-tr-lg ${!isLoginView ? 'bg-purple-600 border-b-2 border-purple-600 font-semibold' : 'text-gray-500 hover:bg-purple-300'}`}
            onClick={() => setIsLoginView(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Formani ko'rsatish */}
        {isLoginView ? (
          // Sign In Formasi
          <form>
            <h2 className="text-xl font-semibold mb-4">Sign In</h2>
            {/* Inputlar (Email, Password) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black" />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium"
            >
              Sign In
            </button>
          </form>
        ) : (
          // Sign Up Formasi
          <form>
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            {/* Inputlar (Username, Email, Password) */}
            {/* ... (Sign up uchun inputlar qo'shiladi) ... */}
             <div className="mb-4">
               <label className="block text-sm font-medium text-gray-700">Username</label>
               <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black" />
             </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black" />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthModal;