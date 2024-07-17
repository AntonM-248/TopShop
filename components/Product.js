import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';

const Product = (props) => {
  const { id, title, thumbnail, description, category } = props.product;

  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    dispatch(addItem(product));
  } 

  return (
    <div className="col">
      <div className="card">
        <img src={ thumbnail } className="card-img-top" alt="..."/>
        <div className="card-body">
          <Link to={ 'product/' + id }>
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }</p>
            <span className="badge custom-badge text-bg-secondary">{        category }</span>
            <br></br>
          </Link>
          <a onClick={ (e) => handleAddToCart(e, props.product) } className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  )
}

//Higher order component example.

export const DiscountedProduct = (Product) => {
  return (props) => {
    return (
      <div className='col'>
        <span className="badge custom-badge text-bg-secondary">50% Discount!!!</span>
        <Product { ...props }/>
      </div>
    )
  }
}

//clicks happen in leaf components 
//and api calls happen at upper levels
export default Product