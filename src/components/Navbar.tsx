import Link from "next/link";

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="item">
        <Link href="/">Homepage</Link>
      </div>
      <div className="item">
        <Link href="/first">First</Link>
      </div>
    </div>
  )
};