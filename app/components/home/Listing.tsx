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
  console.log("DEBUG TAB BUS LIST: ", data);
  return (
    <>
      <Input placeholder="Cari operator bus..." />
      <ListBus data={data} />
    </>
  );
};

const StationList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getStationList().then((res) => setData(res));
  }, []);
  return (
    <>
      <Input placeholder="Cari terminal..." />
      <ListStation data={data} />
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
