import React from "react";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 max-w-7xl mx-auto ">
      <div className="border rounded p-4 row-span-2">Item 1</div>
      <div className="border rounded p-4 row-span-3">Item 2</div>
      <div className="border rounded p-4">Item 3</div>
      <div className="border rounded p-4 row-span-2">Item 6</div>
      <div className="border rounded p-4">Item 7</div>
    </div>
  );
};

export default AboutSection;
