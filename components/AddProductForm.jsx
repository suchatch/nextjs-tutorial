import React, {useState, useRef} from 'react'

// รับฟังก์ชัน dispatch มาทาง props
export default function AddProductForm({dispatch}) {
    // กำหนด ref สำหรับอินพุต Product Name 
    const productNameInput = useRef(null)
    // กำหนด ref สำหรับอินพุต Price
    const priceInput = useRef(null)
    // กำหนด state เก็บข้อมูลสินค้าจากแบบฟอร์ม
    const [form, setForm] = useState({
        id: null,
        productName: 'N/A',
        price: 0,
    })
    // เมื่อผู้ใช้กรอกแบบฟอร์ม กำหนดค่าไปยัง state
    function onInputChange(e) {
        const newProduct = {...form}
        newProduct[e.target.name] = e.target.value
        setForm(newProduct);
    }
    // เมื่อผู้ใช้คลิกปุ่ม Add ส่ง action เพื่อเพิ่มสินค้าไปยัง state
    function addHandler() {
        const id = Math.random().toString() + Date.now().toString();
        const productName = form.productName
        const price = Number(form.price)
        const isShowing = false
        dispatch({type: 'ADD', payload: {id, productName, price, isShowing}})   
        clearForm()
    }
    // รีเซ็ตแบบฟอร์ม โดยล้างค่า value ใน ref และเคลียร์ข้อมูลสินค้าใน state
    function clearForm() {
        productNameInput.current.value = ''
        priceInput.current.value = ''
        setForm({
            productName: null,
            price: null,
            disabled: true
        })
    }
  return (
    <div className='flex justify-center w-full sm:w-11/12 md:w-8/12 lg:w-6/12 items-center mx-auto p-3 border border-blue-400 bg-blue-100 rounded-sm shadow-sm'>
        <div className='flex flex-col w-6/12 self-end mx-1'>
            <label className='pr-2' htmlFor="productName">Product</label>
            <input 
                className='w-full pl-2'
                ref={productNameInput} 
                type="text" 
                name="productName" 
                onChange={onInputChange} 
            />
        </div>
        <div className='w-4/12 self-end flex flex-col mx-1'>
            <label className='pr-2' htmlFor='price'>Price</label>
            <input 
                className='w-full pl-2'
                ref={priceInput} 
                type="number" 
                name="price" 
                onChange={onInputChange}
            />
        </div>
        <div className='w-2/12 self-end mx-1'>
            <button 
            onClick={addHandler} 
            className='bg-blue-500 hover:bg-blue-600 text-white rounded-sm px-4 w-full'>
                Add
            </button>
        </div>
    </div>
  )
}
