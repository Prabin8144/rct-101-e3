import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [data,setData] = useState([])

  useEffect(() => {
   axios.get("http://localhost:8080/products")
      .then((res) => {
        setData(res.data)
      });
  }, []);

  return <div>
    {data.map((el)=>{
      return(
        <div>
          <Product key={el.id} {...el}/>
        </div>
      )
    })}
  </div>
  
};

export default Products;
