import { React, useState, useEffect } from 'react';
import Product, { DiscountedProduct } from './Product'

const ProductList = () => {
  const productData = [
    {
      name: 'iPhone',
      description: 'Apple cellphone with 3 gb of ram',
      category: 'mobile phone',
    },
    {
      name: 'Samsung',
      description: 'Korean cellphone with 4 gb of ram',
      category: 'mobile phone',
    },
    {
      name: 'iPad',
      description: 'Apple tablet with 3 gb of ram',
      category: 'tablet',
    }
  ]

  const [ products, setProducts ] = useState(productData);
  const [ categoryList, setCategoryList ] = useState(productData);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ isFiltering, setIsFiltering ] = useState(false);

  const DiscountedProd = DiscountedProduct(Product);

  useEffect( () => {
    /*
      useEffect should be used to make api calls

      it runs after component mounts and finishes rendering

      this prevents the api call from blocking 
        the rendering of the page
    */
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async() => {
    const products = await fetch("https://dummyjson.com/products");
    const productsJson = await products.json();
    setProducts(productsJson.products);
  }

  const fetchCategories = async() => {
    const categories = await fetch('https://dummyjson.com/products/categories');
    const categoriesJson = await categories.json();
    setCategoryList(categoriesJson);
  }

  const handleClick = (e) => {
    const filteredProducts = products.filter( (product) => compareCategories(e.target.textContent.toLowerCase(), product.category))
    setFilteredProducts(filteredProducts);
    setIsFiltering(true);
  }

  function compareCategories(firstCategory, secondCategory) {
    console.log(firstCategory + " " + secondCategory + (firstCategory == secondCategory));
    return firstCategory === secondCategory;
  }

  return (
    <>
      <div className="container text-center product-wrapper">
        <div className='row'>
          { Array.from(categoryList)?.map( (category, index) => 
          
            <button type="button" onClick={ (e) => handleClick(e) } key={ index } className="btn btn-primary">{ category.name }</button>
            
          )}
        </div>
        <div className="row">
          { isFiltering && filteredProducts.length > 0 ? 
            filteredProducts?.map( (product, index) => (
              /*
                question mark operator checks if the products 
                array has elements first before iterating to
                prevent errors
              */
                product.category.toLowerCase() === 'beauty' ?
                  <DiscountedProd product={ product } key={ index } />
                :
                  <Product product={ product } key={ index } />
              )
            )
            : 
              isFiltering ? 'No Products found for this category.'
              :
              products?.map( (product, index) => (
                  product.category.toLowerCase() === 'beauty' ?
                    <DiscountedProd product={ product } key={ index } />
                  :
                    <Product product={ product } key={ index } />
                )
              )
          }
        </div>
      </div>
    </>
  );
}

export default ProductList;