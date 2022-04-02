import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm';

const EditProduct = (props) => {
    
    // //// INITIAL FIELDS //////////////////////////////
    const {productId} = props.match.params;
    const [loaded, setLoaded] = useState(false)

    const initialProduct = {
        title:'',
        price:0,
        description:''
    }

    // ////  STATES ///////////////////////////////////////
    const [product, setProduct] = useState(initialProduct);

    // //// API GET PRODUCT ///////////////////////////////
    const getProductById = async (productId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/product/${productId}`)
            console.log("Response: ",response);
            setProduct(response.data.product)
            setLoaded(true);
        } catch (error) {
            console.log("Error: ",error);
        }
    }

    useEffect(() => {
        console.log(productId);
        getProductById(productId)
    }, [])
    

    const handleUpdateProduct = async (product) => {
        setLoaded(false);
        try {
            const response = await axios.put(`http://localhost:8000/api/${productId}/product`,product)
            console.log("Response Updated",response);
            setProduct(response.data.product);
            setLoaded(true);
        } catch (error) {
            console.log("Error",error);     
        }
    } 
    return(
        <div>
            {
                loaded && (
                <div className=''>
                    <h1>Update</h1>
                    <ProductForm initialProduct={product} onSubmitProp={handleUpdateProduct} />
                </div>
                )
            }
            <DeleteButton productId={productId} successCallBack={()=>props.history.push("/")}/>
        </div>
    );

}
export default EditProduct;