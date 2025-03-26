"use client";

import React, { useEffect, useState, useMemo } from "react";
import { FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

import StatCard from "@/components/Analytics/StatCard";
import OrderTable from "@/components/Tables/OrderTable";
import OrderStatusChart from "@/components/Analytics/charts/OrderStatusChart";
import RevenueChart from "@/components/Analytics/charts/RevenueChart";
import SalesTrendChart from "@/components/Analytics/charts/SalesTrendChart";
import DatePicker from "@/components/DatePicker";
import MostOrderedItems from "@/components/Analytics/charts/MostOrderedItems";
import SummarySection from "@/components/Analytics/SummarySection";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [salesTrend, setSalesTrend] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchRevenue();
    fetchSalesTrend();
  }, []);

  function fetchOrders() {
    fetch("datas/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }

  function fetchRevenue() {
    fetch("datas/revenue.json")
      .then((res) => res.json())
      .then((data) => setRevenueData(data));
  }

  function fetchSalesTrend() {
    fetch("datas/salesTrend.json")
      .then((res) => res.json())
      .then((data) => setSalesTrend(data));
  }

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
  }, [orders]);

  return (
    <Layout>
      {/* Date picker */}
      <section className="grid gap-6 mt-6">
        <DatePicker />
      </section>

      {/* Stats */}
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
      <section className="grid md:grid-cols-12 gap-6 mt-8">
        <div className="md:col-span-4">
          <RevenueChart revenueData={revenueData} />
        </div>

        <div className="md:col-span-4">
          <OrderStatusChart orderStatusData={orderStatusData} />
        </div>

        <div className="md:col-span-4">
          <SalesTrendChart salesPerMonth={salesTrend} />
        </div>

        <div className="md:col-span-7">
          <SummarySection />
        </div>

        <div className="md:col-span-5">
          <MostOrderedItems />
        </div>
      </section>

      {/* Order table */}
      <section className="grid mt-6">
        {orders && <OrderTable orders={orders} />}
      </section>
    </Layout>
  );
}
