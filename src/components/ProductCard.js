import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />

      <div className="card-content">
        <h3>{product.name}</h3>
        <p>${product.price}</p>

        <button className="btn" style={{ marginTop: '10px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
