export const Input = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="max-w-sm space-y-3 mb-6">
      <input
        type="text"
        className="py-3 px-4 block w-full border focus:outline-orange-600 border-gray-200 rounded-lg text-sm focus:border-none focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer/-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
