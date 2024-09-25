
const API_BASE_URL = "https://next-ecommerce-api.vercel.app/products"

export default async function fetchData (skip = 0, searchItem = "") {
    
    const response = await fetch(`${API_BASE_URL}?skip=${skip}${searchItem ? `&search=${searchItem}` : ""}`)
    // let r = await response.json()

    // console.log(r)
    console.log('12345')

    if(!response) {
        throw Error ("Failed to fetch Data")
    }
    return response.json()

}

