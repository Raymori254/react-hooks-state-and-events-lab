import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  return (
    <li className="" className={isInCart ? "in-cart" : ""}>
  
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="remove" onClick={() => setIsInCart(!isInCart)}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
