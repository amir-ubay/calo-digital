"use client";
import { useRouter } from "next/navigation";
export const BackButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.back();
    router.refresh();
  };
  return (
    <div>
      <button onClick={onClick}>Back</button>
    </div>
  );
};
