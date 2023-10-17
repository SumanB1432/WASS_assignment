import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Productlist() {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getItem();

    },[])

    const getItem = async()=>{
        let result = await fetch('http://localhost:4000/GET/api/items');
      
        result = await result.json();
        result = Array.from(result)
        setProducts(result);

    }
    console.warn(products)

    const deleteProduct=async(id)=>{
        let result = await fetch(`http://DELETE/api/items/${id}`,{
        method:'Delete'
      
    });
    result = await result.json();
    if(result){
        alert("record is deleted")
        getItem()
    }

    }

    // const searchHandle = async (event)=>{
    //     let key = event.target.value;
    //     if(key){
    //         let result = await fetch(`http://eedss.onrender.com/search/${key}`);
    //         result = await result.json()
    //         if(result){
    //             setProducts(result)
    //         }
    //     }else{
    //         getItem();
    //     }
        
    // }

  return (
    <div className='product-list'>
        <h1>product list</h1>

        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>operation</li>
            {/* <li>userId</li> */}
        </ul>
        {
          products.length>0 ? products.map ((item,index)=>(
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li> $ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to= {`/update/${item._id}`}>update</Link>
            </li>
        </ul>
            )

            ):
            <h1>no result found</h1>
        }
        
    </div>
  )
}

export default Productlist