import { Home } from "./Icons";
import Link from "next/link";

export const HomeButton = () => {
  return (
    <>
      <Link href="/">
        <div className="absolute right-5 top-0 translate-y-1/2 bg-orange-600 rounded-full p-2">
          <Home />
        </div>
      </Link>
    </>
  );
};
