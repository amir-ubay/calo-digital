"use client";
import React from "react";
import { Tab } from "../Tab";
import { ListBus } from "../ListBus";
import { ListStation } from "../ListStation";
import { useState, useEffect } from "react";
import { getBusList } from "../../lib/data";
import { getStationList } from "../../lib/data";
import { Input } from "../Input";

interface BusData {
  _id: string;
  operator: string;
  logo: string;
  busClass: string[];
}

type BusList = BusData[];

const BusList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getBusList().then((res) => setData(res));
  }, [data]);

  const [filter, setFilter] = useState<string>("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const result = data.filter((item: BusData) =>
      item.operator.toLowerCase().includes(filter.toLowerCase())
    );

    setFiltered(result);
  }, [filter, data]);
  return (
    <>
      <Input
        placeholder="Cari operator bus..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ListBus data={filter !== "" ? filtered : data} />
    </>
  );
};

interface StationData {
  _id: string;
  name: string;
  city: string;
  address: string;
  mapPin: string;
}

type StationList = StationData[];

const StationList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getStationList().then((res) => setData(res));
  }, []);

  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const result = data.filter((item: StationData) => {
      const comparator = item.city + " " + item.name;
      return comparator.toLowerCase().includes(filter.toLowerCase());
    });
    setFiltered(result);
  }, [filter, data]);
  return (
    <>
      <Input
        placeholder="Cari nama terminal atau kota..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
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
