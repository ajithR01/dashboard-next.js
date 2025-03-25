import React, { useState } from "react";

export default function OrderTable({ orders }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Orders Table */}
      <section className="mt-8 bg-white p-6 shadow-md rounded-md text-black">
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Order Status</th>
              <th className="border p-2">Delivery Person</th>
              <th className="border p-2">Total Items</th>
              <th className="border p-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.Order_ID} className="border">
                <td className="border p-2">{order.Order_ID}</td>
                <td className="border p-2">{order.Customer_Name}</td>
                <td className="border p-2">{order.Customer_Phone}</td>
                <td className="border p-2">{order.Order_Status}</td>
                <td className="border p-2">{order.Delivery_Person || "N/A"}</td>
                <td className="border p-2">{order.Items.length}</td>
                <td className="border p-2">
                  $
                  {order.Items.reduce(
                    (acc, item) => acc + item.Total_Price,
                    0
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-end space-x-2">
          {Array.from(
            { length: Math.ceil(orders.length / ordersPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-md shadow-md text-black ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
}
