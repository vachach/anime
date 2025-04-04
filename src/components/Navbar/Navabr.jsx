import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({onSearch}) => {
  const [query, setQuery] = useState("")

  const handleSearch = (e) =>{
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Vachach Anime</h1>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Search anime..."
        className="px-3 py-1 text-black rounded-md outline-none focus:ring-2 focus:ring-green-400"
      />
      <div className="space-x-4">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/popular" className="hover:text-green-400">Popular</Link>
        <Link to="/latest" className="hover:text-green-400">Latest</Link>
      </div>
    </nav>
  );
};

export default Navbar;