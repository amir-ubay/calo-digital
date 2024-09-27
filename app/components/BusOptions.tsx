"use client";
import { getBusList } from "../lib/data";
import { useEffect, useState } from "react";

type BusName = {
  _id: string;
  operator: string;
  logo: string;
  busClass: string[];
};

export const BusOptions = () => {
  const [data, setData] = useState<BusName[]>([]);
  useEffect(() => {
    getBusList().then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((item: { operator: string }) => (
        <option key={item.operator} value={item.operator}>
          {item.operator}
        </option>
      ))}
    </>
  );
};
