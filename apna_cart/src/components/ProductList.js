import React from 'react';
import Product from './Product.js';

export default function ProductList(props) { //or using destructured way is also possible: `export default function ProductList({product})`
    console.log(props); //then accessing the property here would seem like: `console.log({product})`
    return (
        props.productList.length>0?
        props.productList.map((product,index)=>{
            return <Product product={product} key={index} increamentQuantity={props.increamentQuantity} decreamentQuantity={props.decreamentQuantity} index={index} removeProduct={props.removeProduct}/>
        }):<h1>No item in cart</h1>
    )
}