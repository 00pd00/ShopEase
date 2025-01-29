import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { Menu, X } from "lucide-react";
import Logo from "../Logo.webp";

const Header = () => {
  const [categories, setcategories] = useState([]);
  const [DarkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cart = useSelector(store => store.cart.items);
  const username = auth.currentUser;

  const categoryfetch = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories");
    const json = await data.json();
    setcategories(json.slice(1, 5));
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!DarkMode);
  };

  useEffect(() => {
    categoryfetch();
  }, []);

  return (
    <header className="md:w-[104.7%] w-[110%] -mx-4  md:-mx-8 bg-[#272a32] text-white shadow-lg">
      <div className="flex justify-between space-x-4 items-center max-w-8xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img alt="ShopEase Logo" className="w-20 rounded-md" src={Logo} />
          </Link>
          <Link to="/" className="text-2xl font-bold ml-3">
            ShopEase
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {categories.map((item, index) =>
            <Link key={index} to={`/${item.name}`} className="hover:underline">
              {item.name}
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded hover:bg-gray-700"
          >
            {DarkMode ? "Dark" : "Light"}
          </button>
          <Link to="/cart" className="px-3 hover:underline">
            Cart ({cart.length})
          </Link>
          {username
            ? <Link to="/Login" className="flex items-center">
                <img
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="User"
                />
                <span className="ml-2">
                  {username.displayName}
                </span>
              </Link>
            : <Link to="/Signup" className="px-3 hover:underline">
                SignUp
              </Link>}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <X className="text-white w-6 h-6" />
            : <Menu className="text-white w-6 h-6" />}
        </button>
      </div>

      {menuOpen &&
        <div className="md:hidden bg-[#272a32] text-white space-y-3 p-4">
          <nav className="flex flex-col space-y-2">
            {categories.map((item, index) =>
              <Link
                key={index}
                to={`/${item.name}`}
                className="hover:underline"
              >
                {item.name}
              </Link>
            )}
          </nav>
          <button
            onClick={toggleDarkMode}
            className="w-full py-2 rounded hover:bg-gray-700"
          >
            {DarkMode ? "Dark Mode" : "Light Mode"}
          </button>
          <Link to="/cart" className="block hover:underline">
            Cart ({cart.length})
          </Link>
          {username
            ? <Link to="/Login" className="flex items-center space-x-2">
                <img
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
                  className="w-8 rounded-full"
                  alt="User"
                />
                <span>
                  {username.displayName}
                </span>
              </Link>
            : <Link to="/Signup" className="block hover:underline">
                SignUp
              </Link>}
        </div>}
    </header>
  );
};

export default Header;
