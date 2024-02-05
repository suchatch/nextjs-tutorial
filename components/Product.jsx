import React, {useState} from 'react'
// รับข้อมูลสินค้า (data) และฟังก์ชัน dispatch มาทาง props
export default function Product(props) {
  const {data, dispatch} = props;
  // กำหนด state เก็บสถานะ สำหรับแสดงหรือซ่อนแบบฟอร์มการแก้ไขสินค้า
  const [isShowing, setIsShowing] = useState(false)
  // กำหนด state เก็บข้อมูลจากแบบฟอร์ม  
  const [form, setForm] = useState({
    id: data.id,
    productName: data.productName,
    price: data.price,
  })  
  // เมื่อผู้ใช้กรอกแบบฟอร์ม ค่าอินพุตจะถูกนำไปเก็บใน state
  function onInputChange(e) {
    const newData = {...form}
    newData[e.target.name] = e.target.value
    setForm(newData);
  }
  // เมื่อผู้ใช้คลิกปุ่ม DELETE จะส่ง action เพื่อลบสินค้า 
  function deleteHandler() {
    dispatch({type: 'DELETE', payload: data.id})
  }
  // เมื่อผู้ใช้คลิกปุ่ม CONFIRM EDIT จะส่ง action เพื่อแก้ไขข้อมูลสินค้า 
  function editHandler() {
    dispatch({type: 'EDIT', payload: {
      id: data.id,
      productName: form.productName,
      price: form.price
    }})
    showHideHandler()
  }
  // เมื่อผู้ใช้คลิกปุ่ม EDIT จะแก้ไข state เพื่อแสดงหรือซ่อนแบบฟอร์มการแก้ไขสินค้า
  function showHideHandler() {
    setIsShowing(!isShowing)
  }
  return (
    <div 
      key={data.id} 
      className="w-full sm:w-6/12 lg:w-3/12 mt-3 bg-white border border-gray-300 py-6 px-2 rounded-sm shadow-md"
    >
      <div className='flex justify-center mx-auto text-lg font-semibold'>
        {data.productName}
      </div>
      <div className='flex justify-center mx-auto'>
        {data.price}
      </div>
      <div className='flex justify-center my-2'>
        <button 
          className="mx-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-sm"
          onClick={showHideHandler}
        > 
          {isShowing ? 'HIDE' : 'EDIT'}
        </button>
        <button 
          className="mx-1 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-sm"
          onClick={deleteHandler}
        >
          DELETE
        </button>
      </div>
    {
    // เมื่อผู้ใช้คลิกปุ่ม EDIT ค่า isShowing จะเป็น true ให้แสดงแบบฟอร์มแก้ไขสินค้า
    isShowing &&
      <div className='px-2 py-4 bg-gray-200 w-full rounded-sm'>
        <input 
          className='w-full my-1 pl-2'
          name="productName" 
          defaultValue={data.productName} 
          onChange={onInputChange} 
        />
        <input 
          className='w-full my-1 pl-2'
          type="number" 
          name="price" 
          defaultValue={data.price} 
          onChange={onInputChange} 
        />
        <button 
          onClick={editHandler} 
          className='flex justify-center mx-auto bg-blue-500 hover:bg-blue-600 text-white mt-1 py-1 px-2 rounded-sm'
        >
          CONFIRM EDIT
        </button>
      </div>
    }
    </div>
  )
}
