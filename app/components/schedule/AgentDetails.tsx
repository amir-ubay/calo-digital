"use client";
import { useState } from "react";
import { Agent } from "../Icons";
export const AgentDetails = ({
  name,
  phone,
  address,
  pinMap,
}: {
  name: string;
  phone: string;
  address: string;
  pinMap: string;
}) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <span onClick={toggleDisplay}>{name && <Agent />}</span>
      {display && (
        <>
          <div
            id="overlay"
            className="block size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none bg-black bg-opacity-60"
            role="dialog"
            tabIndex={-1}
          >
            <div className="transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
              <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3
                    id="hs-vertically-centered-modal-label"
                    className="font-bold text-gray-800 dark:text-white"
                  >
                    {name}
                  </h3>
                  <button
                    type="button"
                    className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                    aria-label="Close"
                    data-hs-overlay="#hs-vertically-centered-modal"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      onClick={toggleDisplay}
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <table>
                    <tbody className="text-left">
                      <tr>
                        <td>Telpon</td>
                        <td className="pl-5">{phone}</td>
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td className="pl-5">{address}</td>
                      </tr>
                      <tr>
                        <td>Gmap</td>
                        <td className="pl-5">
                          <a href={pinMap} target="_blank">
                            Map
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    onClick={toggleDisplay}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
