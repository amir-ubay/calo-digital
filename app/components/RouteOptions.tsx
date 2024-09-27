"use client";
import { getCityList } from "../lib/data";
import { useEffect, useState } from "react";

interface RouteProps {
  _id: string;
  name: string;
}
export const RouteOptions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCityList().then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: RouteProps) => (
        <option key={item._id} value={item.name} className="m-20">
          {item.name}
        </option>
      ))}
    </>
  );
};
