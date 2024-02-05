async function getProducts() {
    const response = await fetch(`${process.env.DB_HOST}/products`, { next: { revalidate: 60 } })
    if (!response.ok) {
      throw new Error('cannot fetch products')
    }
    return response.json()
}
export default async function page() {
  async function getData() {
    
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        return resolve('Data Ready!')
      }, 3000)
    })
  }
  const message = await getData()
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
      <div className="text-3xl text-gray-400">Products Status : {message}</div>
    </div>
  )
}
