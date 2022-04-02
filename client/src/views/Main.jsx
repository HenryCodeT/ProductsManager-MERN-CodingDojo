import axios from 'axios';
import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () =>{
        
    const [loaded, setLoaded] = useState(true);
    const initialProduct = {
        title:'',
        price:0,
        description:''
    }

    const createProduct = async (product) => {
        setLoaded(false);
        try {
            const response = await axios.post('http://localhost:8000/api/product/new',product)
            console.log("Response: ",response)
            setLoaded(true);
            } catch (error) {
            console.log("Error: ",{error})
            }
    }

    return(
        <div>
            {
                loaded && (
                <div>
                    <h1>Product Manager</h1>
                    <ProductForm initialProduct={initialProduct} onSubmitProp={createProduct}/>
                    <hr />
                    <ProductList/>
                </div>
                )
            }
        </div>
    );
}
export default Main;