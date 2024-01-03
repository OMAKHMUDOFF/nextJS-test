import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between px-12 py-5 text-gray-600 bg-indigo-200 font-bold text-lg">
      <h1 className="inline mr-5">Hello world</h1>
      <Link href="/" className="inline mr-5">
        Home
      </Link>
      <Link href="/privet">Privet Page</Link>
    </nav>
  );
}

export default Navbar;
