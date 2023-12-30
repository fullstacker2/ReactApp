import React from "react";
import Column from "./Column";
import { CurrencyContext } from "../Context";
import { Link } from "react-router-dom";

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
                <div className="d-flex flex-column shadow-sm text-center p-4 mb-4">
                <Link to={`/detail/${data.productId}`}>
                 <img className = "img-thumbnail" src ={data.productImage}/> 
                </Link>
                <h5 className="fw-light text-capitualize my-2">{data.productName}</h5>
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
                </div>
            </Column>
        );
    }
}
export default Product;
