"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import favorite from "../public/favorite.svg";
import cart from "../public/cart.svg";

const ProductCard = (props) => {
  const { title, thumbnail, category, price, id } = props;
  return (
    <div className="flex flex-col max-h-[130rem] cursor-pointer max-w-80 hover:-translate-y-1 hover:scale-105 duration-300 bg-white border border-slate-200 shadow shadow-slate-950/5  overflow-hidden">
      <div className="flex align-center p-2">
        <button className="relative left-[85%]">
          {/*  */}
          <Image src={favorite} alt="" />
        </button>
      </div>

      <Link href={`/product/${id}`} className="flex justify-center">
        <Image
          width={250}
          height={250}
          className="object-cover "
          src={thumbnail}
          alt=""
          priority={true} // Enable for high-priority images (above-the-fold content)
          placeholder="blur" // Optional: Shows a blurry placeholder while loading
          blurDataURL="../public/favorite.svg"
        />
      </Link>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex-1">
          <header className="mb-2 flex-2">
            <h2 className="text-sm line-clamp-2 font-extrabold leading-snug">
              <div className="text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                {title}
              </div>
            </h2>
          </header>

          <div className="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug">
            <h2>R{price}</h2>
          </div>
        </div>
        <div className="flex mt-1 space-x-2">
          <div className="justify-start flex-1">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {category}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-3 space-x-2">
          <button>
            <Image className="w-8" src={cart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
