import React from "react";
import Item from "../Item/Item"
import "./ItemList.css";

const ItemList = ({ products, onDetailClick }) => {
    return (
      <div className="ListGroup">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} onDetailClick={onDetailClick} />
        ))}
      </div>
    );
  };
  
  export default ItemList;