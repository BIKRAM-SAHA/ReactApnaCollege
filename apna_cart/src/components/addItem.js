import React from 'react'

class AddItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productName:"",
            productPrice:0
        }
    }
    render(){
        return <div>
            <form className='row mb-5 mt-4'>
            <div className="mb-3 col-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Item name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
                    this.setState({productName:e.currentTarget.value})
                }}
                value={this.state.productName}/>
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" className="form-control" id="exampleInputPassword1" onChange={(e)=>{
                    this.setState({productPrice:parseInt(e.currentTarget.value)})
                }}
                value={this.state.productPrice}/>
            </div>
            <button type='button' className="btn btn-primary col-4" onClick={()=>{this.props.addItem(this.state.productName,this.state.productPrice)}}>Add</button>
            </form>
        </div>
    }
}

export default AddItem