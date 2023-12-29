import React from "react";
import Product from "../components/Product";
import Axios from "axios";

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
                        btnClick={() => console.log("add item")}
                    />
                ))}
            </div>
        );
    }
}
export default ProductList;