import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const ProductList = () =>{
    // //// FIELDS ///////////////////////////////////////////////////////////////
    const [products, setProducts] = useState([])

    // //// API GET ALL //////////////////////////////////////////////////////////
    const getAllProducts = async () =>{
        try {
            const response = await axios.get("http://localhost:8000/api/products")
            console.log("Response: ",response);
            setProducts(response.data.products);    
        } catch (error) {
            console.log("Error: ", {error});
        }
        
    }
    useEffect(()=>{
        getAllProducts();
    },[])
   
    const successCallBack = (productId) =>{
        setProducts(products.filter(product => product._id !== productId))
    }

    return(
        <div>
            <h2>All Products:</h2>
            {
                products.map((product,index)=>
                    <div key={index}>
                        <Link to={`/${product._id}`}><h3>{product.title}</h3></Link>
                        <DeleteButton productId={product._id} successCallBack={()=>successCallBack(product._id)}/>
                    </div>
                )
            }
        </div>
    );

}
export default ProductList