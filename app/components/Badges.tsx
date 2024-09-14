export const Badge1 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
      {label}
    </span>
  );
};

export const Badge2 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
      {label}
    </span>
  );
};

export const Badge3 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">
      {label}
    </span>
  );
};

export const Badge4 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-600 text-white dark:bg-blue-500">
      {label}
    </span>
  );
};

export const Badge5 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
      {label}
    </span>
  );
};

export const Badge6 = ({ label }: { label: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white">
      {label}
    </span>
  );
};
