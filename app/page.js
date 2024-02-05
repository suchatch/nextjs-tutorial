'use client'
import GrandFather from '@/components/GrandFather'
import MyProvider from '@/store/MyContext'

export default function Home() {
  return (
    <div>
      <MyProvider>
        <GrandFather />
      </MyProvider>
    </div>
  )
}
