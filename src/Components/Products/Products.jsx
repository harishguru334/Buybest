import React from "react";
import ProductLayout from "./ProductLayout";
import { Iphones, } from "../../Data";
import NewProducts from "../NewProducts"

function Products() {

  return (
    <>
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductLayout data={Iphones} />
      </div>
      <NewProducts />
      

    </>
  )
}
export default Products;