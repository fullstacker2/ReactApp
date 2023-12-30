import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
    // useParams : path params :/detail/100
    const params = useParams();
    // useSearchParams : query params : /detail/100?pincode=234567
    const [queryParams, setQueryParams] = useSearchParams();
    return (
        <div>
            <h1>Product Detail</h1>
            <p>PID : {params.pid}</p>
            <p>Pincode: {queryParams.get("pincode")}</p>
        </div>
    );
}
export default ProductDetail;