async function getProducts() {
    const response = await fetch('http://localhost:3000/api/products', { next: { revalidate: 60 } })
    if (!response.ok) {
      throw new Error('cannot fetch products')
    }
    return response.json()
}
export default async function page() {
  const productsRep = await getProducts();
  return (
    <div>
      Products page
      {
        productsRep.map((item, index) => (
          <div key={index}>
            {item.id} {item.productName}
          </div>
        ))
      }
    </div>
  )
}
