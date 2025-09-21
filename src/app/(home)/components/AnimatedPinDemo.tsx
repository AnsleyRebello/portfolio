"use client";
import React from "react";
import Image from "next/image";
import data from "../../../static/Info.json";
import { PinContainer } from "../../../components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center lg:h-[110vh] lg:w-[80vw]">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full px-4">
        {data.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.href}>
            <div className="flex flex-col justify-between p-4 tracking-tight text-slate-100/50 w-full max-w-[22rem] h-auto sm:max-w-[20rem] sm:h-[22rem] lg:w-[25rem] lg:h-[25rem] rounded-lg shadow-lg mx-auto">
              {/* Title */}
              <h3 className="font-bold text-sm sm:text-base text-slate-100 max-w-full !pb-1">
                {item.title}
              </h3>

              {/* Description */}
              <div className="text-sm sm:text-base font-normal !m-0 !p-0">
                <span className="text-slate-500">{item.des}</span>
              </div>

              {/* Image */}
              <div className="flex flex-1 w-full mt-4 rounded-lg overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  priority={true}
                  src={item.imageLink}
                  alt="Pulp"
                  className="object-cover w-full h-auto sm:h-[10rem]"
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
