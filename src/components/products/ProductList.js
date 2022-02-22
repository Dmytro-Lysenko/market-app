import React from "react";
import Products from "./Products";

const DUMMY_DATA = [
  {
    id: "h1",
    price: 230,
    type: "smartphone",
    title: "Xiomi",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "h2",
    price: 290,
    type: "smartphone",
    title: "Samsung",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "tv1",
    price: 530,
    type: "tv",
    title: "Xiomi",
    img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
  {
    id: "tv2",
    price: 890,
    type: "tv",
    title: "Samsung",
    img: "https://mui.com/static/images/cards/paella.jpg",
    description:
      "Some description here for example testing, Some description here for example testing",
  },
];

const ProductList = (props) => {
  return (
    <div>
      {DUMMY_DATA.map((product) => (
        <Products
          product={product}
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.title}
          type={product.type}
          img={product.img}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
