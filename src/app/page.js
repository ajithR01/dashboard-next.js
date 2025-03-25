"use client";

import React, { useEffect, useState, useMemo } from "react";
import { FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

import StatCard from "@/components/StatCard";
import OrderTable from "@/components/OrderTable";
import OrderStatusChart from "@/components/charts/OrderStatusChart";
import RevenueChart from "@/components/charts/RevenueChart";
import SalesTrendChart from "@/components/charts/SalesTrendChart";
import DatePicker from "@/components/DatePicker";
import MostOrderedItems from "@/components/charts/MostOrderedItems";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 8000 },
    { month: "Mar", revenue: 12000 },
    { month: "Apr", revenue: 5000 },
  ];

  const totalSum = useMemo(() => {
    return Math.round(
      orders.reduce((sum, order) => {
        return (
          sum +
          (order.Items
            ? order.Items.reduce(
                (itemSum, item) => itemSum + (item.Total_Price || 0),
                0
              )
            : 0)
        );
      }, 0)
    );
  }, [orders]); // Recomputes only when `orders` change

  const orderStatusData = [
    {
      name: "Pending",
      value: orders.filter((o) => o.Order_Status === "Pending").length,
    },
    {
      name: "Completed",
      value: orders.filter((o) => o.Order_Status === "Completed").length,
    },
    {
      name: "Cancelled",
      value: orders.filter((o) => o.Order_Status === "Cancelled").length,
    },
  ];

  const activeUsersData = [
    { month: "Jan", users: 800 },
    { month: "Feb", users: 1200 },
    { month: "Mar", users: 1800 },
    { month: "Apr", users: 2400 },
  ];

  return (
    <Layout>
      <section className="grid gap-6 mt-6">
        <DatePicker />
      </section>
      <section className="grid md:grid-cols-4 gap-6 mt-6">
        <StatCard
          icon={<FaDollarSign size={30} />}
          title="Revenue"
          value={`$${totalSum}`}
        />
        <StatCard
          icon={<FaUsers size={30} />}
          title="Orders Today"
          value="145"
        />
        <StatCard
          icon={<FaChartLine size={30} />}
          title="Conversion Rate"
          value="8.2%"
        />
        <StatCard
          icon={<MdOutlineRateReview size={30} />}
          title="Customer Reviews"
          value="4.4/5"
        />
      </section>
      {/* Charts Section */}
      <section className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Revenue Chart */}
        <RevenueChart revenueData={revenueData} />

        {/* Order Chart */}
        <OrderStatusChart orderStatusData={orderStatusData} />

        {/* Active Chart */}
        <SalesTrendChart activeUsersData={activeUsersData} />

        <MostOrderedItems />
      </section>
      {orders && <OrderTable orders={orders} />} {/* </main> */}
    </Layout>
  );
}
