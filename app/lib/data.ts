import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9mwbesq4",
  dataset: "production",
  apiVersion: "2024-09-09",
  useCdn: false,
});

const getBusname = async () => {
  const query = `*[_type == "busName"]`;
  const params = {};
  return await client.fetch(query, {}, { cache: "no-store" });
};

// && destination._ref == 'b7bcc005-7c24-4d7e-89df-36aec6765796'

export const getBusRoute = async () => {
  const query = `*[_type == "busRoute" ]{"operator": name->name,"busClass": busClass->name, "origin": origin->name, "destination": destination->name, price,"schedules": schedule[]{"busStop":busStop->name, time}}`;

  return await client
    .fetch(
      query,
      {},
      {
        cache: "no-store",
      }
    )
    .then((res) => res.filter((item: any) => item.destination == "Malang"));
};

export const findBusRoute = async (origin: any, destination: any) => {
  const query = `*[_type == "busRoute"]{_id,"operator": name->name,"busClass": busClass->name, "origin": origin->name, "destination": destination->name, price,"schedules": schedule[]{"busStop":busStop->name, time}}`;
  return await client.fetch(query, {}, { cache: "no-store" }).then((res) => {
    return res.filter(
      (item: any) => item.origin == origin && item.destination == destination
    );
  });
};

export const getCityList = async () => {
  const query = `*[_type == "city"]{name}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};

export const getBusList = async () => {
  const query = `*[_type == "busName"]{_id, "operator": name, "logo": logo->url, "busClass": busClass[]->name}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};

export const getStationList = async () => {
  const query = `*[_type == "busStop"]{_id, name, "type": type[0], address, "city" : city->name, mapPin}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};
