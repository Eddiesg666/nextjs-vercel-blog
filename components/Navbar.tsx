import Link from "next/link";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/">
        <Home className="h-6 w-6" />
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/about">About</Link>
        <Link href="/articles">Articles</Link>
      </div>
    </nav>
  );
}
