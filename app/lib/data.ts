import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2024-09-09",
  useCdn: false,
});

interface BusRoute {
  operator: string;
  origin: string;
  destination: string;
}

export const getBusRoute = async () => {
  const query = `*[_type == "busRoute" ]{"operator": name->name,"busClass": busClass->name, "origin": origin->name, "destination": destination->name, price,"schedules": schedule[]{"busStop":busStop->name, time, "busAgent": agent->name, "phoneAgent": agent->phone, "addressAgent": agent->address, "mapAgent": agent->pinMap}}`;

  return await client
    .fetch(
      query,
      {},
      {
        cache: "no-store",
      }
    )
    .then((res) =>
      res.filter((item: BusRoute) => item.destination == "Malang")
    );
};

export const findBusRoute = async (
  origin: string,
  destination: string,
  operator: string
) => {
  const query = `*[_type == "busRoute"]{_id,"operator": name->name,"busClass": busClass->name, "logo": name->logo.asset->url, "origin": origin->name, "destination": destination->name, price,"schedules": schedule[]{"busStop":busStop->name, time, "busAgent": agent->name, "phoneAgent": agent->phone, "addressAgent": agent->address, "mapAgent": agent->pinMap}}`;
  return await client.fetch(query, {}, { cache: "no-store" }).then((res) => {
    if (operator) {
      return res.filter((item: BusRoute) => item.operator == operator);
    } else if (origin && !destination) {
      return res.filter((item: BusRoute) => item.origin == origin);
    } else if (!origin && destination) {
      return res.filter((item: BusRoute) => item.destination == destination);
    } else if (origin && destination) {
      return res.filter(
        (item: BusRoute) =>
          item.origin == origin && item.destination == destination
      );
    } else if (origin && origin && destination) {
      return res.filter(
        (item: BusRoute) =>
          item.origin == origin &&
          item.destination == destination &&
          item.operator == operator
      );
    }
    // return res.filter(
    //   (item: any) => item.origin == origin && item.destination == destination
    // );
  });
};

export const getCityList = async () => {
  const query = `*[_type == "city"]{_id, name}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};

export const getBusList = async () => {
  const query = `*[_type == "busName"]{_id, "operator": name, "logo": logo.asset->url, "busClass": busClass[]->name}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};

export const getStationList = async () => {
  const query = `*[_type == "busStop"]{_id, name, "type": type[0], address, "city" : city->name, mapPin}`;
  return await client.fetch(query, {}, { cache: "no-store" });
};
