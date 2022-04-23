import React, { useEffect, useState } from 'react';
import ShowPd from './ShowPd';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Welcome to home {products.length}</h2>
            {
                products.map(pd => <ShowPd key={pd._id} pd={pd}></ShowPd>)
            }
        </div>
    );
};

export default Home;