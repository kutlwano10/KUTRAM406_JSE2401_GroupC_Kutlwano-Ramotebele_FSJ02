"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchData from "../api/route";
import SearchBar from "./SearchBar";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  /**To keep the state of the pages */
  let [pages, setPages] = useState(0);
  let [searchItem, setSearchItem] = useState('')

  const getProducts = async (pageNumber, searchItem = '') => {
    try {
      const data = await fetchData(pageNumber, searchItem);
      console.log("123");
      if (pageNumber != 0) {
        setProducts((previousProducts) => [...previousProducts, ...data]);
      } else {
        setProducts(data);
      }
      console.log("setp");
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  useEffect(() => {
    getProducts(0);
  }, []);

  /**
   *
   * @returns number of products
   */
  const handleShowMore = () => {
    console.log("im clicked");
    const nextPage = pages + 20;
    setPages(nextPage);
    getProducts(nextPage, searchItem);
  };

  const handleSearch = (newSearchItem)=> {
    setSearchItem(newSearchItem)
    setPages(0)
    getProducts(0, newSearchItem)

  }

  return (
    <>
      <div className="flex flex-col items-center">
      <SearchBar onSearch={handleSearch}/>
        {console.log(products)}
        <div className="lg:max-h-[130rem] relative bottom-20 px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center  lg:max-w-none my-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="w-full mb-10 text-center ">
          <button
            onClick={handleShowMore}
            className="border px-4 py-2 shadow-md"
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
