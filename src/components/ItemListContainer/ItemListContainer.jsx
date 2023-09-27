import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
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