import React, { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (categoryId) {
          const filteredProducts = response.filter(
            (product) => product.category === categoryId
          );
          setProducts(filteredProducts);
        } else {
          setProducts(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  const handleDetailClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} onDetailClick={handleDetailClick} />
      {selectedProduct && (
        <div>
          
          <h2>Detalle del Producto</h2>
          <p>Nombre: {selectedProduct.name}</p>
          
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;