import ProductCard from "./ProductCard";

export default function Section({ title, subtitle, products }) {
  return (
    <div>
      <div>
        <h2 className="text-xl font-bold"> {title} </h2>
        <p> {subtitle} </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
