import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector(store => store.cart.items);

  return (
    <div>
      <div className=" flex justify-between bg-[#272a32] shadow-lg m-2 rounded-lg  ">
        <div className="flex">
          <div>
            <img
              className="w-28 rounded-md "
              src={
                "https://thumbs.dreamstime.com/b/minimalist-white-orange-logo-against-stark-black-background-conceptualize-premium-clothing-brand-online-presence-315284128.jpg"
              }
            />
          </div>
          <div className="text-white absolute p-10 mx-16">ShopEase</div>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ali text-white ">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li className="px-4">
              <Link to="/cart">
                Cart({cart.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
