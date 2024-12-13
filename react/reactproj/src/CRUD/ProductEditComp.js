import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams} from 'react-router-dom';

const  ProductEditComp=() =>{
    const {id} = useParams();
    const nav = useNavigate();


        const [product,setProduct] = useState({
            id:"",
            pname:"",
            pprice:"",
            pcompany:""
});

    useEffect(()=>{
        axios.get(`http://localhost:8888/products/${id}`).then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{})
    },[]);

    
    const inputChangeHandler = (event)=>{
        const {type, name, value} = event.target;
        setProduct({...product,[name]:value});
    }

    const addProduct = (event)=>{
        event.preventDefault();
        // console.log(product);
        axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
            window.alert("Product updated successfully");
            nav('/mainDashboard/productdash');
        }).catch((error)=>{})
    }
    return (
        <div>
            <h2>This is Product Edit Component</h2>
            <div className='row'>
            <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}>
                        <label className='form label'>Enter Product Name:</label>
                        <input type="text" name='pname' onChange={inputChangeHandler} value={product.pname}
                         className='form-control'/>

                        <label className='form label'>Enter Product price:</label>
                        <input type="text"name='pprice' onChange={inputChangeHandler} value={product.pprice}
                        className='form-control'/>

                        <label className='form label'>Enter Product Company:</label>
                        <input type="text" name='pcompany' onChange={inputChangeHandler} value={product.pcompany}
                         className='form-control'/>

                        <label className='form label'>Enter Product Quantity:</label>
                        <input type="text" name='pquantity' onChange={inputChangeHandler} value={product.pquantity}
                        className='form-control'/>

                        <button type="submit" className='btn btn-outline-warning mt-2'>Update Data</button>
                    </form>
            </div>
        </div>
        </div>
    )
}

export default ProductEditComp
