import React,{useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    // //// INITIAL FIELDS ///////////////////////////
    const initialProduct = {
        title:'',
        price:0,
        description:''
    }
    // //// FIELDS ///////////////////////////////////
    const [product, setProduct] = useState(initialProduct)

    // //// SETTING VALUES //////////////////////////
    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    // //// REQuESTS AND RESPONSES /////////////////////////////////
    const handleCreateProduct = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new',product)
            .then(response => console.log("Response: ",response))
            .catch(err => console.log("Error: ",{err}))
        setProduct(initialProduct);
    }
    return(
        <div className='col-5 mx-auto'>
            <form onSubmit={handleCreateProduct} >
                <div className='form-group'>
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control' onChange={handleOnChange} type="text" name='title' value={product.title} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="price">Price</label>
                    <input className='form-control' onChange={handleOnChange} type="number" name='price' value={product.price} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor="description">Description</label>
                    <input className='form-control' onChange={handleOnChange} type="text" name='description' value={product.description} />
                </div>
                <button type='submit' className='btn btn-success'>Create</button>
            </form>
        </div>
    );

}
// **** EXPORTS *****
export default ProductForm;