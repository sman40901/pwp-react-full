import React from "react";
import "./Product.css";
import { useStateValue } from "../../Services/StateProvider/StateProvider";


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TOBASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="productinfo">
                <p>{title}</p>
                <p className="productprice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                    <p>🌟</p>
              ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;

