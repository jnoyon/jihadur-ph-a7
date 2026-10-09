import ProductCard from "./ProductCard";

export default function Section({
  id,
  title,
  subtitle,
  products,
  icon,
  showSorting,
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <div id={`${id}`}>
          <h2 className="text-xl font-bold flex items-center gap-1">
            {icon && icon} {title}{" "}
          </h2>

          <p> {subtitle} </p>
        </div>
        {showSorting && (
          <div className="flex items-center gap-2 mb-5">
            {" "}
            <label> সাজান </label>
            <select className="select">
              <option> ডিফল্ট </option>
              <option> দাম: কম থেকে বেশী </option>
              <option> দাম: বেশী থেকে কম </option>
            </select>
          </div>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
