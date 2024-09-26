"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import fetchData from "../api/route";
import SearchBar from "./SearchBar";
import { useRouter, useSearchParams } from "next/navigation";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [pages, setPages] = useState(0);
  let [searchItem, setSearchItem] = useState("");

  let router = useRouter();
  let searchParams = useSearchParams();

  const getProducts = async (pageNumber, searchItem = "") => {
    try {
      setLoading(true);
      const data = await fetchData(pageNumber, searchItem);

      if (pageNumber != 0) {
        setProducts((previousProducts) => [...previousProducts, ...data]);
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error Fetching Products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialSearch = searchParams.get("search") || "";
    setSearchItem(initialSearch);
    getProducts(0, initialSearch);
  }, [searchParams]);

  /**
   *
   * @returns number of products
   */
  const handleShowMore = () => {
    const nextPage = pages + 20;
    setPages(nextPage);
    getProducts(nextPage, searchItem);
  };

  const handleSearch = (newSearchItem) => {
    setSearchItem(newSearchItem);
    setPages(0);
    getProducts(0, newSearchItem);
    router.replace(`/?search=${newSearchItem}`);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <p>loading ...</p>
        ) : (
          <div className="lg:max-h-[130rem] relative bottom-20 px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center  lg:max-w-none my-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
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
