import Image from "next/image";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";
import { Badge1, Badge2, Badge3, Badge4, Badge5, Badge6 } from "./Badges";
import { Calendar } from "./Icons";
import { useSearchParams } from "next/navigation";

interface ListBusProps {
  data: BusData[];
}

interface BusData {
  _id: string;
  operator: string;
  logo: string;
  busClass: string[];
}

interface BusRouteContext {
  state: BusRouteState;
  dispatch: (action: BusRouteAction) => void;
}

interface BusRouteState {
  // Add properties to this interface as needed
}

interface BusRouteAction {
  type: string;
  payload: string;
}

export const ListBus = ({ data }: ListBusProps) => {
  const router = useRouter();
  const [, dispatch] = useContext(BusRouteContext);
  const searchParams = useSearchParams();

  const onClick = (operator: string) => {
    dispatch({ type: "setDestination", payload: "" });
    dispatch({ type: "setOrigin", payload: "" });
    dispatch({ type: "setOperator", payload: operator });
    const params = new URLSearchParams(searchParams);
    params.set("operator", operator);
    router.push("/schedule" + "?" + params.toString());
  };
  return (
    <>
      {data.map((item: BusData) => {
        return (
          <div id="item-route" key={item._id} className="mb-4">
            <div className="grid md:grid-rows-1 md:grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 border border-grey-400 rounded-xl p-4 bg-gray-100 md:divide-x-2 md:divide-dashed md:divide-gray-300 gap-0 divide-y-2 md:divide-y-0 divide-dashed divide-gray-300 relative">
              <div
                id="bus-name"
                className="md:row-span-1 md:col-span-1 justify-self-center content-center md:mb-0"
              >
                <div id="bus-logo">
                  {item.logo && (
                    <Image
                      src={item.logo}
                      width={250}
                      height={100}
                      alt={item.operator}
                    />
                  )}
                </div>
                <div
                  id="cipped"
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
              </div>
              <div
                id="bus-class"
                className="md:row-span-1 md:col-span-1 justify-self-center md:text-left text-center w-full md:pl-8 p-8 "
              >
                <div id="bus-class-item">
                  {item.busClass?.map((n: string, index: number) => {
                    return (
                      <div className=" mr-2 mb-2" key={index + n}>
                        {index === 0 && <Badge1 key={index + n} label={n} />}
                        {index === 1 && <Badge2 key={index + n} label={n} />}
                        {index === 2 && <Badge3 key={index + n} label={n} />}
                        {index === 3 && <Badge4 key={index + n} label={n} />}
                        {index === 4 && <Badge5 key={index + n} label={n} />}
                        {index === 5 && <Badge6 key={index + n} label={n} />}
                      </div>
                    );
                  })}
                </div>
                <div
                  id="cipped"
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
                <div
                  id="bus-schedule"
                  className="absolute right-4 bottom-2 bg-orange-600 rounded-full p-1"
                >
                  <div
                    onClick={() => onClick(item.operator)}
                    className="cursor-pointer"
                  >
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
