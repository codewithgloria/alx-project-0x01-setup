import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">ALX Airbnb Clone</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  );
}