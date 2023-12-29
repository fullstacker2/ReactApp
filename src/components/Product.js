import React from "react";
import Column from "./Column";
import { CurrencyContext } from "../Context";

class Product extends React.Component {
    static contextType = CurrencyContext;
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
            <Column size = {4}>
                <img className = "img-thumbnail" src ={data.productImage}/>
                <h5>{data.productName}</h5>
                <h6>
                    {this.context}
                    {data.productPrice}
                </h6>
                {this.renderStock(data.productStock, btnClick)}

                {/* {
                    data.productStock > 0 ? (
                        <button onClick={()=> btnClick(data.productId)}>Add to Cart</button>
                    ) : null
                } */}
            </Column>
        );
    }
}
export default Product;