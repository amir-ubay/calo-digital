"use client";
import { getBusList } from "../lib/data";
import { useEffect, useState } from "react";
export const BusOptions = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getBusList().then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <>
      {data.map((item: any) => (
        <option key={item.operator} value={item.operator}>
          {item.operator}
        </option>
      ))}
    </>
  );
};
