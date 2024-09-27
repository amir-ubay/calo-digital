import { Home } from "./Icons";
import Link from "next/link";

export const HomeButton = () => {
  return (
    <>
      <Link href="/">
        <div className="md:absolute md:right-5 md:top-0 md:translate-y-1/2 absolute -top-3 right-0 translate-y-1/2 bg-orange-600 rounded-full p-2">
          <Home />
        </div>
      </Link>
    </>
  );
};
