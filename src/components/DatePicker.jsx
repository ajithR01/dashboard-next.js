"use client";

import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function DatePicker() {
  const [dateRange, setDateRange] = useState({
    selectedRange: "",
    fromDate: "",
    toDate: "",
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDateRange({ selectedRange: "", fromDate: today, toDate: today });
  }, []);

  const handleDateRangeChange = (value) => {
    console.log("handleDateRange", value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Date Range Select */}
      <div>
        <FormControl fullWidth>
          <InputLabel id="date-range-label">Select Date Range</InputLabel>
          <Select
            labelId="date-range-label"
            id="date-range-select"
            label="Select Date Range"
            value={dateRange.selectedRange}
            onChange={(event) =>
              setDateRange((prev) => ({
                ...prev,
                selectedRange: event.target.value,
              }))
            }
          >
            <MenuItem value={7}>Past 7 days</MenuItem>
            <MenuItem value={30}>Past 30 days</MenuItem>
            <MenuItem value={60}>Past 60 days</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* From Date Picker */}
      <div>
        <TextField
          type="date"
          label="From"
          value={dateRange.fromDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, fromDate: e.target.value })
          }
          fullWidth
        />
      </div>

      {/* To Date Picker */}
      <div>
        <TextField
          type="date"
          label="To"
          value={dateRange.toDate}
          onChange={(e) =>
            setDateRange({ ...dateRange, toDate: e.target.value })
          }
          fullWidth
        />
      </div>
    </div>
  );
}
