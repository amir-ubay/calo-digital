import { Spinner } from "./components/Spinner";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full grid grid-col-1 justify-center items-center content-center">
      <Spinner />
    </div>
  );
}
