import React from 'react';

type Props = {
  heading: string;
};
const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-3xl font-bold lg:text-4xl text-white">{heading}</h1>
      <p className="text-white text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
      </p>
    </div>
  );
};

export default SectionHeading;
