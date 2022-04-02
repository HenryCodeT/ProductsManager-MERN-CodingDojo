import axios from 'axios';
import React from 'react';

const DeleteButton = (props) => {
    const {productId, successCallBack} = props

    const deleteProduct = async (id) => {
        console.log("delete product");
        try {
            const response = axios.delete(`http://localhost:8000/api/${id}/product`)
            console.log("Response",response);
            successCallBack();
        } catch (error) {
            console.log(error);            
        }
    }

    return (
        <div>
             <button onClick={()=> deleteProduct(productId)} className='btn btn-danger'>Delete</button>
        </div>
    );
}
export default DeleteButton;