import React, { ReactNode } from "react";

const HeroWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="h-full max-w-[1440px] mx-auto">{children}</div>;
};

export default HeroWrapper;
