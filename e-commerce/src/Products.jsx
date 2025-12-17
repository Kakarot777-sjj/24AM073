const products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Laptop", price: 45000 },
  { id: 3, name: "Headphones", price: 2000 }
];

export default function Products({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Products</h1>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            width: "220px"
          }}
        >
          {/* IMAGE ONLY ADDED */}
          <img
            src="https://via.placeholder.com/200"
            alt={p.name}
            style={{ width: "100%" }}
          />

          <p><b>{p.name}</b></p>
          <p>₹ {p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}