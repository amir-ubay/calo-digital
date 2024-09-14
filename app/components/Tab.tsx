import React from "react";

export const Tab = ({
  operator,
  station,
}: {
  operator: React.ReactNode;
  station: React.ReactNode;
}) => {
  return (
    <div>
      <nav
        className="flex gap-x-1"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300 active"
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
          className="hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent text-sm font-medium text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          id="equal-width-elements-item-3"
          aria-selected="false"
          data-hs-tab="#equal-width-elements-3"
          aria-controls="equal-width-elements-3"
          role="tab"
        >
          Terminal Bus
        </button>
      </nav>

      <div className="mt-3">
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
