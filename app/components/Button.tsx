"use client";
export const Button = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <div className="mt-8 mx-auto ">
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex items-center justify-center gap-x-2 text-sm rounded-full border border-transparent bg-gray-800 text-white hover:bg-orange-600 focus:outline-none  transition-all disabled:opacity-50 disabled:pointer-events-none font-bold"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
