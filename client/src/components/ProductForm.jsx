import React,{useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    // //// INITIAL FIELDS ///////////////////////////
    const {initialProduct , onSubmitProp} = props

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
        // axios.post('http://localhost:8000/api/product/new',product)
        //     .then(response => console.log("Response: ",response))
        //     .catch(err => console.log("Error: ",{err}))
        // setProduct(initialProduct);
        e.preventDefault();
        onSubmitProp(product);
        setProduct(initialProduct);

    }
    return(
        <div className='col-5 mx-auto'>
            <form onSubmit={handleCreateProduct} >
                <div className='row form-group'>
                    <label className='col form-label' htmlFor="title">Title</label>
                    <input className='col form-control border border-dark' onChange={handleOnChange} type="text" name='title' value={product.title} />
                </div>
                <div className='row form-group'>
                    <label className='col form-label' htmlFor="price">Price</label>
                    <input className='col form-control border border-dark' onChange={handleOnChange} type="number" name='price' value={product.price} />
                </div>
                <div className='row form-group'>
                    <label className='col form-label' htmlFor="description">Description</label>
                    <input className='col form-control border border-dark' onChange={handleOnChange} type="text" name='description' value={product.description} />
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    );

}
// **** EXPORTS *****
export default ProductForm;