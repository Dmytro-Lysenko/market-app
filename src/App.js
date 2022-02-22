import { Fragment } from "react";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Products /> */}
      <ProductList />
    </Fragment>
  );
}

export default App;
