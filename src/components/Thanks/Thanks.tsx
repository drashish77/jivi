import React from "react";

const Thanks = () => {
  return (
    <div className="relative z-30 w-full md:w-2/3 lg:w-1/3 mx-auto">
      <h1 className="pt-5 pb-3 border-b">Success</h1>
      <div className="flex flex-col justify-center items-start h-screen">
        <h4 className="text-x font-bold">Thank you.</h4>
        <p className="font-medium">Your details are saved successfully.</p>
      </div>
    </div>
  );
};

export default Thanks;
