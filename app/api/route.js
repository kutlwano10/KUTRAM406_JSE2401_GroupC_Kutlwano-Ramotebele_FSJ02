
const API_BASE_URL = "https://next-ecommerce-api.vercel.app/products"

export default async function fetchData (skip = 0, searchItem = "") {
    const searchQuery = searchItem ? `&search=${searchItem}` : "";
    
    const response = await fetch(`${API_BASE_URL}?skip=${skip}${searchQuery}`, {catch: "no-store"})

    if(!response) {
        throw Error ("Failed to fetch Data")
    }
    return response.json()

}

