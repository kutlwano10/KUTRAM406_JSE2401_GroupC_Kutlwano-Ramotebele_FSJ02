const API_BASE_URL = "https://next-ecommerce-api.vercel.app/products";

export async function getProductDetails(productId) {
  const response = await fetch(`${API_BASE_URL}/${productId}`);
  console.log(response);

  if (!response) {
    throw Error("Failed to fetch Data");
  }
  return response.json();
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */

export default async function productDetails({ params }) {
    /**
     * The params will get the id of the routed Product Detail using the [id] folder
     */
  const product = await getProductDetails(params.id);

  return (
    <main>
      <div key={product.id}>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt="" />
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {product.category}
        </span>

        <p>{product.description}</p>
      </div>
    </main>
  );
}
