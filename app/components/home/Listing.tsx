"use client";
import React from "react";
import { Tab } from "../Tab";
import { ListBus } from "../ListBus";
import { ListStation } from "../ListStation";
import { useState, useEffect } from "react";
import { getBusList } from "../../lib/data";
import { getStationList } from "../../lib/data";

const BusList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getBusList().then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>Daftar Operator Bus</h1>
      <ListBus data={data} />
    </>
  );
};

const StationList = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getStationList().then((res) => setData(res));
  }, []);
  console.log("DEBUG STATION LIST, ", data);
  return (
    <>
      <h2>Daftar Terminal</h2>
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
