import AllProducts from '@/components/AllProducts';

export default function HomePage() {
  return (
    <div className='flex flex-col px-3 items-start justify-center min-h-screen w-screen'>
      <div className='flex items-center justify-center text-2xl sm:text-3xl text-blue-500 sm:text-blue-400 w-full my-3'>Thinkbeyond Shop</div>
      <AllProducts />
    </div>
  );
}
