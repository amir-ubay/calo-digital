"use client";
import React from "react";
import { Tab } from "../Tab";
import { ListBus } from "../ListBus";
import { ListStation } from "../ListStation";
import { useState, useEffect } from "react";
import { getBusList } from "../../lib/data";
import { getStationList } from "../../lib/data";
import { Input } from "../Input";

const BusList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getBusList().then((res) => setData(res));
  }, []);

  const [filter, setFilter] = useState<string>("");
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    const result = data.filter((item: any) =>
      item.operator.toLowerCase().includes(filter.toLowerCase())
    );

    setFiltered(result);
  }, [filter]);
  return (
    <>
      <Input
        placeholder="Cari operator bus..."
        value={filter}
        onChange={(e: any) => setFilter(e.target.value)}
      />
      <ListBus data={filter !== "" ? filtered : data} />
    </>
  );
};

const StationList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getStationList().then((res) => setData(res));
  }, []);

  const [filter, setFilter] = useState<string>("");
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    const result = data.filter((item: any) => {
      const comparator = item.city + " " + item.name;
      return comparator.toLowerCase().includes(filter.toLowerCase());
    });
    setFiltered(result);
  }, [filter]);
  return (
    <>
      <Input
        placeholder="Cari nama terminal atau kota..."
        value={filter}
        onChange={(e: any) => setFilter(e.target.value)}
      />
      <ListStation data={filter !== "" ? filtered : data} />
    </>
  );
};

export const Listing = () => {
  return (
    <div>
      <Tab operator={<BusList />} station={<StationList />} />
    </div>
  );
};
