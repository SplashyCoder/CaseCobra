"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const onDropAcepted = () => {};
  const onDropRejected = () => {};

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/5 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1  flex-col items-center justify-center w-full">
        <Dropzone onDropRejected={}></Dropzone>
      </div>
    </div>
  );
};

export default page;
