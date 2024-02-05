'use client'
import StudentConsumer from "@/components/StudentConsumer";
import StudentProvider from "@/store/StudentProvider";

export default function HomePage() {
  return (
    
    <StudentProvider>
        <div className="flex flex-col justify-center items-start mx-auto min-h-screen">
          <div className="text-center mx-auto text-2xl my-3 text-gray-400">
            Student List
          </div>
          
          <StudentConsumer />
        </div>
    </StudentProvider>
  );
}
