import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Services/StateProvider/StateProvider";
import { auth } from "../../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
          <Link to="/">
            <img alt="logo"
              className="headerlogo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
    
          <div className="headersearch">
            <input className="headersearchInput" type="text" />
            <SearchIcon className="headersearchIcon" />
          </div>
    
          <div className="headernav">
            <Link to={!user && '/login'}>
              <div onClick={handleAuthenticaton} className="headeroption">
                <span className="headeroptionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                <span className="headeroptionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
    
            <Link to='/orders'>
              <div className="headeroption">
                <span className="headeroptionLineOne">Returns</span>
                <span className="headeroptionLineTwo">& Orders</span>
              </div>
            </Link>
    
    
            <div className="headeroption">
              <span className="headeroptionLineOne">Your</span>
              <span className="headeroptionLineTwo">Prime</span>
            </div>
    
            <Link to="/checkout">
              <div className="headeroptionBasket">
                <ShoppingBasketIcon />
                <span className="headeroptionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      );
    
}

export default Header;