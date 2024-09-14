"use client";
import { RouteOptions } from "./RouteOptions";
export const Select = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}) => {
  return (
    <select
      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      onChange={onChange}
      value={value}
    >
      <option value={""}>{placeholder}</option>
      <RouteOptions />
    </select>
  );
};
