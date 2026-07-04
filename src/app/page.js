
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero container">
        <h1>Modern E-Commerce Catalog</h1>
        <p style={{ margin: '20px 0' }}>
          Production-ready Next.js project with optimized performance.
        </p>

        <Link href="/products">
          <button className="btn">
            Browse Products
          </button>
        </Link>
      </section>
    </>
  );
}
