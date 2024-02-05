import { revalidatePath } from 'next/cache'
import { products } from '@/dataMookup';
// กำหนดตัวแปรเก็บข้อมูลสินค้าทั้งหมด
const allProducts = products
// คอมโพเนนต์ในแบบ Server Component
export default function MyServerAction() {
    // ฟังก์ชันที่ถูกเรียกเมื่อคลิกปุ่ม Delete
    async function deleteProductById(id) {
        'use server'
        // หาค่า index ของสินค้าที่ต้องการจะลบ
        const index = allProducts.findIndex(product => product.id === id);
        if (index !== -1) {
          // สั่งลบสินค้า
          allProducts.splice(index, 1);
          // สั่งให้ revalidate เพื่ออัปเดตข้อมูลในแคช
          revalidatePath('/')
        }
    }
    // ฟังก์ชันถูกเรียกใช้เมื่อส่งแบบฟอร์มเพิ่มสินค้า
    async function submitHandler(formData) {
        'use server'
        // อ่านค่าอินพุตที่ส่งมาจากแบบฟอร์ม
        const productName = formData.get('productName')
        const price = formData.get('price')
        // สุ่มค่า id สำหรับใช้กับสินค้าแต่ละรายการ
        const id = Math.random().toString() + Date.now().toString()
        // เพิ่มข้อมูลสินค้าไปยังอาร์เรย์ allProducts
        allProducts.push({id, productName, price})
        // สั่งให้ revalidate เพื่ออัปเดตข้อมูลในแคช
        revalidatePath('/')
    }
    return (
    <div className="my-3">
        {/* เมื่อผู้ใช้ส่งแบบฟอร์ม จะเรียกฟังก์ชัน submitHandler */}
        <form 
        action={submitHandler}
        className='bg-gray-200 border border-gray-700 rounded-sm flex justify-stretch p-5'
        >
            <div>

            <label htmlFor='productName'>Product Name</label>
            <input 
            className="pl-2 m-2"
            type="text"
            name="productName" 
            required
            />
            </div>
            <div>
            <label htmlFor='price'>Price</label>
            <input 
            className="pl-2 m-2"
            type="number" 
            name="price"
            required
            />
            </div>
            <input 
            className="m-2 py-1 px-2 text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-800 rounded-sm"
            type='submit' 
            value={'Add'} 
            />
        </form>
        {
        allProducts.length == 0? 
        <div 
        className='my-4 text-center'
        >
            No Product!
        </div> : 
        <div className='my-3'>
        {allProducts.map((item, index) => {
            return (
                <form 
                key={index} 
                className={`flex justify-between pl-2 py-2 ${index % 2 ===0 ?'bg-gray-100':'bg-gray-200'}`}
                >
                    <div className='w-1/2'>{item.productName}</div>
                    <div className='w-1/4'>{item.price}</div>
                    {/* กำหนดปุ่มลบสินค้า โดยกำหนดฟังก์ชันไปยังแอตทริบิวต์ formAction */}
                    <button 
                    className="py-1 px-2 text-white bg-red-500 hover:bg-red-400 active:bg-red-900 rounded-sm"
                     formAction={deleteProductById.bind(this, item.id)}
                     >delete</button>
                </form>
            )
        })}
        </div>
    }
    </div>
    )
}
