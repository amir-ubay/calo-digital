import React from "react";

export const Tab = ({
  operator,
  station,
}: {
  operator: React.ReactNode;
  station: React.ReactNode;
}) => {
  return (
    <div className="shadow-xl rounded-2xl">
      <nav
        className="flex gap-x-1"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className="hs-tab-active:bg-orange-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 rounded-t-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300 active border border-orange-400 bg-orange-50"
          id="equal-width-elements-item-1"
          aria-selected="true"
          data-hs-tab="#equal-width-elements-1"
          aria-controls="equal-width-elements-1"
          role="tab"
        >
          Operator Bus
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-orange-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 rounded-t-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300 border border-orange-400 bg-orange-50"
          id="equal-width-elements-item-3"
          aria-selected="false"
          data-hs-tab="#equal-width-elements-3"
          aria-controls="equal-width-elements-3"
          role="tab"
        >
          Terminal Bus
        </button>
      </nav>

      <div className="p-4 border-0 rounded-b-2xl">
        <div
          id="equal-width-elements-1"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-1"
        >
          {operator}
        </div>
        <div
          id="equal-width-elements-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-3"
        >
          {station}
        </div>
      </div>
    </div>
  );
};
