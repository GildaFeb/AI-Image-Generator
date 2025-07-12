import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqCard = () => {
  return (
    <Accordion type="single" collapsible className="text-white w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:text-xl lg:text-2xl cursor-pointer">
          How do I generate an image?
        </AccordionTrigger>
        <AccordionContent>
          Simply enter a descriptive promqpt in the input field and click "Generate." The AI will
          create an image based on your input.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-xl lg:text-2xl cursor-pointer">
          Can I download the generated images?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you can download any generated image by clicking the "Download" button that appears
          below the result.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="md:text-xl lg:text-2xl cursor-pointer">
          Are the images copyright-free?
        </AccordionTrigger>
        <AccordionContent>
          Generated images are AI-created and typically free to use, but always check the usage
          rights if you're using them commercially.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="md:text-xl lg:text-2xl cursor-pointer">
          What should I type in the prompt?
        </AccordionTrigger>
        <AccordionContent>
          Be as specific and descriptive as possible. For example: "A futuristic city skyline at
          sunset, cyberpunk style."
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqCard;
