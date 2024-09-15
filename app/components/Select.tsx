"use client";
import { RouteOptions } from "./RouteOptions";
import { MapPin, Flag, Rocket, Pin, Destination } from "./Icons";

export const Select = ({
  value,
  onChange,
  placeholder,
  label,
  type,
}: {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  label: string;
  type: "origin" | "destination" | "operator";
}) => {
  return (
    <div className="mb-4 relative">
      <label className="text-sm text-gray-400 mb-12 font-bold">{label}</label>
      <select
        className="py-3 px-12 pe-9 block w-full border-gray-200 border bg-white text-gray-600 rounded-lg text-sm font-bold active:border-orange-500 hover:border-orange-500 focus:outline-none focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none transition-all"
        onChange={onChange}
        value={value}
      >
        <option value={""}>{placeholder}</option>
        <RouteOptions />
      </select>
      <div className="absolute inset-y-0 left-2 flex items-center mt-6 text-gray-600">
        {type === "origin" && <Pin />}
        {type === "destination" && <Destination />}
        {type === "operator" && <Rocket />}
      </div>
    </div>
  );
};
