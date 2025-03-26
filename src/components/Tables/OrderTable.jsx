import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

const TABLE_HEAD = [
  "Order ID",
  "Customer Name",
  "Phone",
  "Address",
  "Order Type",
  "Order Status",
  "Delivery Person",
  "Delivery Status",
  "Actions",
];

// Function to get badge styles based on status
const getStatusStyles = (status) => {
  const statusLower = status.toLowerCase();
  if (statusLower === "pending")
    return "bg-yellow-500 text-white px-2 py-1 rounded-md";
  if (statusLower === "in transit")
    return "bg-blue-500 text-white px-2 py-1 rounded-md";
  if (statusLower === "delivered")
    return "bg-green-500 text-white px-2 py-1 rounded-md";
  if (statusLower === "cancelled")
    return "bg-red-500 text-white px-2 py-1 rounded-md";
  if (statusLower === "failed")
    return "bg-gray-700 text-white px-2 py-1 rounded-md";
  return "text-gray-700"; // Default style for unknown statuses
};

export default function OrderTable({ orders }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const displayedOrders = orders.slice(startIndex, startIndex + rowsPerPage);

  return (
    <>
      <Card className="h-full w-full overflow-auto p-4">
        <table className="w-full min-w-max table-auto text-left">
          {/* Table Head */}
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {displayedOrders.map((row, index) => {
              const isLast = index === displayedOrders.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={row.Order_ID}>
                  <td className={classes}>{row.Order_ID}</td>
                  <td className={classes}>{row.Customer_Name}</td>
                  <td className={classes}>{row.Customer_Phone}</td>
                  <td className={classes}>{row.Customer_Address}</td>
                  <td className={classes}>{row.Order_Type}</td>
                  <td className={classes}>
                    <span className={getStatusStyles(row.Order_Status)}>
                      {row.Order_Status}
                    </span>
                  </td>
                  <td className={classes}>{row.Delivery_Person}</td>
                  <td className={classes}>
                    <span className={row.Delivery_Status}>
                      {row.Delivery_Status}
                    </span>
                  </td>
                  <td className={classes}>
                    <EditIcon className="text-blue-500 cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-end mt-2 p-4">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            shape="rounded"
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
          />
        </Stack>
      </div>
    </>
  );
}
