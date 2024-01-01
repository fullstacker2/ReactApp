import React from "react";
import Product from "../components/Product";
import Axios from "axios";
import { connect } from "react-redux";
import {addItem} from "../store/slices/cartSlice.js";

class ProductList extends React.Component {
    state = {plist : []};
    componentDidMount() {
        this.getData();
    }
    getData() {
        const url="https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
        Axios.get(url)
            .then((res) => {
                console.log("success", res);
                this.setState({plist:res.data});  // mutating the object
            })
            .catch((err) => {
                console.log("error",err);
            });
    }
    render() {
        return (
            <div className="row">
                {this.state.plist.map((item, i) => (
                    <Product
                        key={item.productId}
                        pdata={item}
                        btnClick={() => this.props.add(item)}
                    />
                ))}
            </div>
        );
    }
}
// connect(data to get from the store, data changes to be done inside the store)
const mapDispatchToProps=(dispatch)=>{
    return {
        // prop_name: dispatch_action
        add: (item) => dispatch(addItem(item)),
    };
}
const mapStateToProps=(state)=>{
    return {
        cart: state.cart,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);