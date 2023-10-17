import React from "react";
import { useState } from "react";

function Additems(){


    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false)


    const addProduct=async ()=>{

        if(!name || !price || !category || !company){
            setError(true)
            return false
        }
        console.warn(name,price,category,company);

  
        let result = await fetch('https://assignment-backend-wass.onrender.com/POST/api/items',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers: {
                'Content-Type': 'application/json'
                
            },
        });
       if(result){
        alert("Item added successfully")
       }
        
    }

    return(<div>
            <div className='product'>
        <h1>AddProduct</h1>
        <input className='inputBox' placeholder='Enter product name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
       { error && !name && <span className='addproduct-val'>Enter valid Name</span>}

        <input className='inputBox' placeholder='Enter product price' type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>

        {error && !price && <span className='addproduct-val'>Enter valid Price</span>}
        <input className='inputBox' placeholder='Enter product category' type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}}></input>
        {error && !category && <span className='addproduct-val'>Enter valid Category</span>}
        <input className='inputBox' placeholder='Enter product company' type='text' value={company} onChange={(e)=>{setCompany(e.target.value)}}></input>
        {error && !company && <span className='addproduct-val'>Enter valid Company</span>}
        <button className='add-button'onClick={addProduct}>Add Product</button>
        </div>

    </div>)
}

export default Additems;