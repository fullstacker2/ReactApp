import React from "react";
import {Routes, Route} from "react-router-dom";
import Demo from "./Demo"
import ProductList from "./containers/ProductList"
import Checkout from "./containers/Checkout"
import ErrorPage from "./containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./containers/ProductDetail";

function AppRouter() {
    return (
        <Routes>
            <Route path ="/" element={<Demo/>} />
            <Route path ="/products" element={<ProductList/>} />
            <Route path = "/detail/:pid" element={<ProductDetail />} />
            <Route 
                path ="/checkout" 
                element={
                    <PrivateRoute>
                        <Checkout/>
                    </PrivateRoute>
                } 
            />
            <Route path ="*" element={<ErrorPage/>} />
        </Routes>
    )
}
export default AppRouter;