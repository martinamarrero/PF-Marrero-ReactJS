import React, { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock"; // Importa la función getProducts
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Obtener todos los productos
    getProducts()
      .then((response) => {
        // Filtrar los productos por categoría si categoryId está presente en la URL
        if (categoryId) {
          const filteredProducts = response.filter(
            (product) => product.category === categoryId
          );
          setProducts(filteredProducts);
        } else {
          // Si no hay categoría seleccionada, mostrar todos los productos
          setProducts(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;