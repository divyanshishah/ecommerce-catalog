
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h2>Fastshop</h2>

      <div>
        <Link href="/" style={{ color: 'white', marginRight: '20px' }}>
          Home
        </Link>

        <Link href="/products" style={{ color: 'white' }}>
          Products
        </Link>
      </div>
    </nav>
  );
}
