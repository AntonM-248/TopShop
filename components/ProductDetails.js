import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ProductDetails = (props) => {
  const params = useParams();
  console.log(params);

  const [ product, setProduct ] = useState({});

  useEffect( () => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const product = await fetch('https://dummyjson.com/products/' + params.id);
    const productJson = await product.json();
    setProduct(productJson);
    console.log(productJson);
  }

  return (
    <div className="card">
      <img src={ product?.thumbnail } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product?.title}</h5>
        <p className="card-text">{product?.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Made by { product?.brand }</li>
        <li className="list-group-item">Rating: { product?.rating }</li>
        <li className="list-group-item">${ product?.price }</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  )
}

export default ProductDetails