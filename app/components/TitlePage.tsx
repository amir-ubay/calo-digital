import React from "react";

export const TitlePage = ({ title }: { title: string | null }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
