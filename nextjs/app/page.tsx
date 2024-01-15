import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-5xl m-7 text-center font-bold">Your awesome home page!</h1>


      <ul className='mt-3 flex flex-col items-center md:flex-row justify-center gap-12'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/signin"}>Sign in</Link></li>
        <li><Link href={"/signup"}>Sign up</Link></li>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
      </ul>

    </main>
  )
}
