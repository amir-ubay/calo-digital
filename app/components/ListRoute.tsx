import React from "react";

export const ListRoute = ({
  operator,
  busClass,
  origin,
  destination,
  price,
  schedule,
}: {
  operator: string;
  busClass: string;
  origin: string;
  destination: string;
  price: number;
  schedule: any;
}) => {
  return (
    <div id="item-route">
      <div className="grid grid-cols-3 shadow-sm border rounded-xl">
        <div id="bus-details" className="col-span-1">
          <p>{operator}</p>
          <p>{busClass}</p>
        </div>
        <div id="price" className="col-span-1">
          <p>Rp {price}</p>
        </div>
        <div id="schedule-details" className="col-span-1">
          <p>Jadwal</p>
        </div>
      </div>
      <div id="schedule-dropdown">
        <table className="w-full mx-auto">
          <tbody>
            {schedule.map((item: any) => (
              <tr key={item.busStop + item.time}>
                <td className="">{item.busStop}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
