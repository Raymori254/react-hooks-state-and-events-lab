import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 
  const [filter, setFilter] = useState("All");
  const selectedCategory = filter === "All" ? items : items.filter((item) => item.category === filter);
 
  return (
    <div className="ShoppingList">
      <div className="Filter" >
        <select name="filter" onChange={(e) => setFilter(e.target.value)} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <button className="add" onClick={() => setFilter("All")}>
          Add Item
        </button>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
