import React from "react";

export const ListBus = ({ data }: any) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <div id="item-route" key={item._id}>
            <div className="grid grid-cols-3 shadow-sm border rounded-xl">
              <div id="bus-details" className="col-span-1">
                <p>{item.logo}</p>
              </div>
              <div id="schedule-details" className="col-span-1">
                <p>{item.operator}</p>
                <ol>
                  {item.busClass?.map((item: any) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <div id="price" className="col-span-1">
                <p>Jadwal</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
