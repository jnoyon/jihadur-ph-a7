import baseUrl from "@/app/api/baseUrl";
import toBangla from "@/app/utility/toBangla";
import toBanglaUnit from "@/app/utility/toBanglaUnit";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${baseUrl}/products/${id}`);
  const data = await res.json();

  return {
    title: `${data.nameBn} এর দাম`,
    description: `${data.nameBn} এর বর্তমান বাজারদর, সর্বনিম্ন দাম ও সর্বোচ্চ দাম জানুন।`,
  };
}
export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(`${baseUrl}/products/${id}`);
  const data = await res.json();
  const highestPrice = Math.max(...data.markets.map((market) => market.max));

  const lowestPrice = Math.min(...data.markets.map((market) => market.min));

  const totalPrice = data.markets.reduce(
    (total, market) => total + market.min + market.max,
    0,
  );

  const averagePrice = totalPrice / (data.markets.length * 2);

  return (
    <section className="mb-5">
      <div className="flex justify-between flex-col md:flex-row gap-2 bg-white p-3 rounded-md border border-gray-300">
        <div className="flex gap-2 items-center">
          <span className="text-5xl p-3 rounded-xl bg-gray-200">
            {data.image}
          </span>
          <div>
            <span className="text-3xl font-bold">{data.nameBn}</span> <br />
            <span className="text-gray-600">
              {" "}
              প্রতি {toBanglaUnit(data.unit)} {data.nameBn}
            </span>
            <div className="flex gap-1">
              গতকালের তুলনায় আজ দাম
              {data.change.dir === "up" ? (
                <p>
                  {" "}
                  <b> বেড়েছে </b> {data.today - data.yesterday} টাকা{" "}
                </p>
              ) : (
                <p>
                  {" "}
                  <b> কমেছে </b> {data.yesterday - data.today} টাকা{" "}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-3 rounded-xl">
          <p> আজকের দাম </p>
          <h1 className="text-4xl font-bold"> {toBangla(data.today)} </h1>
          <p> টাকা / {toBanglaUnit(data.unit)} </p>
          <span>
            {data.change.dir === "up" ? (
              <span className="flex gap-1 items-center">
                <FaCaretUp className="text-red-600" />{" "}
                {toBangla(data.change.pct)}%
              </span>
            ) : (
              <span className="flex gap-1 items-center">
                <FaCaretDown className="text-green-600" />{" "}
                {toBangla(data.change.pct)}%
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="bg-white p-3 border border-gray-300 mt-3 rounded-md">
        <h2 className="text-2xl font-bold mb-2"> দামের সারসংক্ষেপ </h2>
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="border border-gray-300 p-3 rounded-xl">
            <p> সর্বনিম্ন দাম </p>
            <h1 className="text-green-600">
              {" "}
              <span className="text-3xl font-bold ">
                {toBangla(lowestPrice)}
              </span>{" "}
              টাকা{" "}
            </h1>
            <p> সবচেয়ে কম দামের বাজার </p>
          </div>
          <div className="border border-gray-300 p-3 rounded-xl">
            <p> সর্বোচ্চ দাম </p>
            <h1 className="text-red-600">
              {" "}
              <span className="text-3xl font-bold ">
                {toBangla(highestPrice)}
              </span>{" "}
              টাকা{" "}
            </h1>
            <p> সবচেয়ে বেশি দামের বাজার </p>
          </div>
          <div className="border border-gray-300 p-3 rounded-xl">
            <p> গড় দাম </p>
            <h1 className="text-green-600">
              {" "}
              <span className="text-3xl font-bold ">
                {toBangla(averagePrice.toFixed(2))}
              </span>{" "}
              টাকা{" "}
            </h1>
            <p> প্রতি কেজির হিসাব </p>
          </div>
        </div>
        <div className="price">
          <h2 className="text-2xl font-bold mb-2"> বাজারভিত্তিক আজকের দাম </h2>
          <table className="table table-zebra ">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বাধিক</th>
                <th>গড়</th>
              </tr>
            </thead>
            <tbody>
              {data.markets.map((item, index) => (
                <tr key={index}>
                  {" "}
                  <td>{item.market}</td>
                  <td>{item.division}</td>
                  <td>{toBangla(item.min)}</td>
                  <td>{toBangla(item.max)}</td>
                  <td> {toBangla(averagePrice.toFixed(2))} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
