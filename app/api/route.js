export async function GET() {
    console.log(`server processing`)
   
    return Response.json([
        {id:'1', productName: 'Product A', price: 120},
        {id:'2', productName: 'Product B', price: 220},
        {id:'3', productName: 'Product C', price: 390}
    ])
  }