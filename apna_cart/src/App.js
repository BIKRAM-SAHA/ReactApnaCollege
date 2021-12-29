import React,{useState} from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import AddItem from './components/addItem.js';

function App() {
  const products=[
    {
      price:9999,
      name:'Iphone 10s max',
      quantity:0
    },
    {
      price:9999,
      name:'Redmi 10s max',
      quantity:0
    }
  ]
  
  let [productList,setProductList]=useState(products)
  let [totalAmount,setTotalAmount]=useState(0)
  

  const increamentQuantity=(index)=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    newProductList[index].quantity++
    newTotalAmount+=newProductList[index].price
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }
  const decreamentQuantity=(index)=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity-- 
      newTotalAmount-=newProductList[index].price
    }
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }
  const reset=()=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    newProductList.forEach(element => {
      element.quantity=0
    });
    newTotalAmount=0
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }
  
  const removeProduct=(index)=>{
    let newProductList=[...productList]
    let newTotalAmount=totalAmount
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
}

const addItem=(Itemname,Itemprice)=>{
    let newProductList=[...productList]
    newProductList.push({price:Itemprice,name:Itemname,quantity:0})
    setProductList(newProductList)
}

  return (
      <>
        <Navbar />
        <main className='container'>
        <AddItem productList={productList} addItem={addItem}/>
        <ProductList productList={productList} increamentQuantity={increamentQuantity} decreamentQuantity={decreamentQuantity} removeProduct={removeProduct}/>

        </main>
        <Footer totalAmount={totalAmount} reset={reset} />
      </>
    );
}

export default App;
