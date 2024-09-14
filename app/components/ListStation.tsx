import React from "react";

export const ListStation = ({ data }: any) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <div id="item-route">
            <div className="grid grid-cols-3 shadow-sm border rounded-xl">
              <div id="bus-details" className="col-span-1">
                <p>Terminal {item.name}</p>
                <p>{item.city}</p>
                <p>{item.address}</p>
                <a href={item.mapPin} target="_blank">
                  pin
                </a>
                <p>{item.type}</p>
              </div>
              <div id="schedule-details" className="col-span-1">
                <p>Operator Bus</p>
              </div>
              <div id="price" className="col-span-1">
                <p>Trayek</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
