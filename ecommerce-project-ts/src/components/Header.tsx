import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import logoWhite from "../assets/images/logo-white.png";
import logoWhiteMobile from "../assets/images/mobile-logo-white.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import ordersIcon from "../assets/images/icons/cart-icon.png";
import "./Header.css";

type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
}

const Header = ({ cart }: HeaderProps) => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  const [search, setSearch] = useState(searchText || "");

  const navigate = useNavigate();

  const updateSearchInput = (event: any) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${search}`);
    setSearch("");
  };

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhite} />
          <img className="mobile-logo" src={logoWhiteMobile} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          onChange={updateSearchInput}
          value={search}
          className="search-bar"
          type="text"
          placeholder="Search"
        />

        <button onClick={searchProducts} className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={ordersIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
