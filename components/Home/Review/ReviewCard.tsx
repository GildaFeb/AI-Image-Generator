import { QuoteIcon } from 'lucide-react';
import React from 'react';

type ReviewProps = {
  name: string;
  role: string;
  image: string;
  review: string;
};
const ReviewCard = ({ name, role, image, review }: ReviewProps) => {
  return (
    <div className="flex item-center justify-center flex-col">
      <QuoteIcon className="text-gray-500 w-10 h-10 mb-4" />
      <div className="bg-gray-950 p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-gray-300 text-sm lg:text-base mb-4">{review}</p>
        <div className="flex items-center space-x-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-gray-400 text-xs">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
