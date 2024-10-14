import React from "react";
import Socials from "./Socials";

export default function Copyright() {
  return (
    <div className="bg-foreground flex-none">
      <div className="h-32 lg:h-40 flex justify-center md:justify-between px-8 items-center md:max-w-mdMaxW lg:max-w-lgMaxW mx-auto">
        <p className="text-background text-sm lg:text-base font-outfitRegular">
          Copyright 2024 © React Cebu. All rights reserved.
        </p>
        <div className="hidden md:block">
          <Socials />
        </div>
      </div>
    </div>
  );
}
