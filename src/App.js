import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(({data}) => {
        setProducts(data.products);
      })
  },[]);

  const price = (value) => {
    let newValue = value.toString();


    return `R$${newValue},00`

  }

  return (
    <div className="App">
      <h1>E-commerce</h1>
      <div class="d-flex align-content-center flex-wrap">
      {
        products && products.map((product) => (
          <>
            <div className='card m-2 mx-auto' style={{width: '18rem'}}>
              <img class="card-img-top" src={product.thumbnail} alt={`Image ${product.title}`} />
              <div className='card-body'>
                <strong>{product.title}</strong>
                <div>{product.description}</div>
                <div className='h2'>{price(product.price)}</div>
              </div>

            </div>
          </>
        ))
      }
    </div>
    </div>
  );
}

export default App;
