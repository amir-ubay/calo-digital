import React, { useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";

export const ListBus = ({ data }: any) => {
  const router = useRouter();
  const [state, dispatch] = useContext(BusRouteContext);

  const onClick = (operator: any) => {
    dispatch({ type: "setOperator", payload: operator });
    router.push("/schedule");
  };
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
                <p onClick={() => onClick(item.operator)}>Jadwal</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
