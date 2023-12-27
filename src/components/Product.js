import React from "react";

class Product extends React.Component {
    renderStock(stock, btnClick) {
        if(stock > 0){
            return <button onClick={()=> btnClick()}>Add to cart</button>
        }
        return <p>Out of Stock</p>
    }
    render() {
        //const data = this.props.pdata;
        const {pdata:data, btnClick} = this.props;
        return (
            <div>
                <img src ={data.productImage}/>    
                <h4>{data.productName}</h4>
                <h5>{data.productPrice}</h5>
                {this.renderStock(data.productStock, btnClick)}

                {/* {
                    data.productStock > 0 ? (
                        <button onClick={()=> btnClick(data.productId)}>Add to Cart</button>
                    ) : null
                } */}
            </div>
        );
    }
}
export default Product;