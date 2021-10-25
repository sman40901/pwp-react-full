import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Services/StateProvider/StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="header">

            <Link to="/">
                <img alt="basket"
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="headersearch">
                <input className="headersearchInput" type="text" />
                <SearchIcon className="headersearchIcon" />
            </div>

            <div className="headernav">

                <div className="headeroption">
                    <span className="headeroptionLineOne">Hello Guest</span>
                    <span className="headeroptionLineTwo">Sign In</span>
                </div>



                <div className="headeroption">
                    <span className="headeroptionLineOne">Returns</span>
                    <span className="headeroptionLineTwo">& Orders</span>
                </div>



                <div className="headeroption">
                    <span className="headeroptionLineOne">Your</span>
                    <span className="headeroptionLineTwo">Prime</span>
                </div>


                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;