import PickupLineGenerator from '@/components/PickupLineGenerator'
import { Github } from 'lucide-react'


export default function Home() {
  return (
    <main className=" relative min-h-screen flex items-center flex-col justify-center mb-24 ">
      <div className="container mx-auto p-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Unmesh Pickup Line</h1>
        <PickupLineGenerator />
      </div>


      <footer className=' justify-center items-center flex flex-col'>
        <p>© {new Date().getFullYear()}Unmesh Pickup Line </p>
        <p>Made by <a href='https://x.com/Unmesh100' target='_blank' className=' border-b border-b-purple-200'>Unmesh</a></p>
        <a href="https://github.com/Unmesh100/UGpickUP" target='_blank' className='flex items-center gap-2 mt-3'><Github/>Github</a>
      </footer>
    </main>
  )
}

