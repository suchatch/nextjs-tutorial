import AllProducts from '@/components/AllProducts';

export default function HomePage() {
  // กำหนดตัวแปร data เก็บข้อมูลสินค้าในแบบอาร์เรย์
  const data = [
    {id: '1', productName:'Pro A', price: 199},
    {id: '2', productName:'Pro B', price: 299},
    {id: '3', productName:'Pro C', price: 399},
    {id: '4', productName:'Pro D', price: 499},
    {id: '5', productName:'Pro E', price: 599},
    {id: '6', productName:'Pro F', price: 699},
  ]

  return (
    <div className='flex px-3 items-start justify-center min-h-screen w-full mx-auto'>
      {/* แสดงข้อมูลสินค้าโดยผ่านค่า data ไปให้กับ AllProducts คอมโพเนนต์ */}
      <AllProducts data={data} />
    </div>
  );
}
