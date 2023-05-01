import Link from "next/link";

export default function Header() {

  return (
    <div className='header flex p-2'>
      <Link href="/" className="mx-2">13milliseconds</Link>
      <Link href="/about">About</Link>
    </div>
  )
}