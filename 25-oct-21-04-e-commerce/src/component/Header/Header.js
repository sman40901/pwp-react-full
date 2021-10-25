import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">

            <img
                className="headerlogo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />


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


                <div className="headeroptionBasket">
                    <ShoppingBasketIcon />
                    <span className="headeroptionLineTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Header;