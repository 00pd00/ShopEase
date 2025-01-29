import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const [categories, setcategories] = useState([]);
  const [DarkMode, setDarkMode] = useState(false);

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
    <div className="-my-3 -mx-2 w-full ">
      <div className=" flex w-full justify-between bg-[#272a32] shadow-lg m-2   ">
        <div className="flex">
          <Link to={"/"}>
            <img
              alt="img"
              className="w-28 rounded-md "
              src={
                "https://thumbs.dreamstime.com/b/minimalist-white-orange-logo-against-stark-black-background-conceptualize-premium-clothing-brand-online-presence-315284128.jpg"
              }
            />
          </Link>
          <Link to={"/"} className="text-white absolute p-10 mx-16">
            ShopEase
          </Link>
        </div>
        <div className="text-white absolute mx-[200px]  space-x-4 py-10   ">
          {categories.map((item, index) =>
            <Link key={index} to={"/" + item.name}>
              {item.name}
            </Link>
          )}
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4 text-white ">
            <li className="px-4">
              <button onClick={toggleDarkMode}>
                {DarkMode ? "Dark" : "Light"}
              </button>
            </li>
            <li>|</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li className="px-4">
              <Link to="/cart">
                Cart({cart.length})
              </Link>
            </li>
            <li>|</li>

            <li className="px-4">
              {username != null
                ? <div>
                    <Link to="/Login">
                      <img
                        src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
                        className="w-8 p-1 -my-1"
                        alt="img"
                      />
                      <span className=" absolute mx-1">
                        {username.displayName}
                      </span>
                    </Link>
                  </div>
                : <div>
                    <Link to="/Signup">SignUp</Link>
                  </div>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
