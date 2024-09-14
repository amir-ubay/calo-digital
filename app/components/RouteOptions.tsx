"use client";
import { getCityList } from "../lib/data";
import { useEffect, useState } from "react";
export const RouteOptions = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getCityList().then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: any) => (
        <option key={item.name} value={item.name} className="m-20">
          {item.name}
        </option>
      ))}
    </>
  );
};
