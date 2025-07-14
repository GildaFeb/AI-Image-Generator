'use client';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

function isAxiosError(error: unknown): error is {
  response?: { data?: { message?: string } };
  message: string;
} {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string'
  );
}


const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateImage = async () => {
  setLoading(true);

  const options = {
    method: 'POST',
    url: 'https://ai-image-generator-free.p.rapidapi.com/generate/stream',
    headers: {
      'x-rapidapi-key': '54619da89emsh1af7d69ba81945ap1fab8ejsnf8dfa3f028c1',
      'x-rapidapi-host': 'ai-image-generator-free.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      prompt,
      negativePrompt: '',
      guidancescale: 7.5,
      style: '(No style)',
    },
  };

  try {
    const response = await axios.request(options);
   const rawData: unknown = response.data;
  const jsonString =
    typeof rawData === 'string'
      ? rawData.trim().split('\n').pop()
      : '';
  const parsedData: { urls?: string[] } = JSON.parse(jsonString || '{}');

    const imageUrl = Array.isArray(parsedData?.urls) ? parsedData.urls[0] : '';
    setImage(imageUrl);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const message = error.response?.data?.message ?? error.message;
      toast.error(`Error: ${message}`, {
        style: { background: 'white', color: 'black' },
      });
    } else if (error instanceof Error) {
      toast.error(error.message, {
        style: { background: 'white', color: 'black' },
      });
    } else {
      toast.error('An unexpected error occurred.', {
        style: { background: 'white', color: 'black' },
      });
    }
  } finally {
    setLoading(false);
  }

  
};


  const handleDownloadImage = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = 'generated-image.png';
    link.target = '_blank';
    link.click();
    toast.success('Image downloaded successfully!', {
      style: { background: 'white', color: 'black' },
    });
  };

  // Handler for image load success
  const handleImageLoad = () => {
    toast.success('Image generated successfully!', {
      style: { background: 'white', color: 'black' },
    });
    setPrompt('');
  };

  // Handler for image load error
  const handleImageError = () => {
    setImage('');
    toast.error('Failed to load generated image.', {
      style: { background: 'white', color: 'black' },
    });
  };

  return (
    <div className="w-[95%] pt-16 px-16 min-h-screen mx-auto mt-[10vh] pb-16 flex flex-col lg:flex-row items-start gap-12">
      {/* LEFT SIDE: Headline, Input, Tags */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-white space-y-6">
        <h3
          data-aos="fade-up"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent"
        >
          Create Beautiful Images <br /> with AI Image Generator
        </h3>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
        >
          Generate stunning visuals using AI. Enter your prompt and let the magic happen!
        </p>

        {/* Prompt Input + Button */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter your prompt here..."
            className="w-full p-4 rounded-lg bg-gray-800 outline-none text-white placeholder:text-sm sm:placeholder:text-base"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            variant="destructive"
            size="lg"
            onClick={handleGenerateImage}
            className="bg-gradient-to-r cursor-pointer from-blue-500 to-violet-600 text-white hover:from-blue-600 hover:to-violet-700 w-full sm:w-auto"
          >
            Generate
          </Button>
        </div>

        {/* Tags */}
        <div className="w-full">
          <p className="text-sm sm:text-base md:text-lg font-medium mb-2">Popular Tags</p>
          <div className="flex flex-wrap gap-2">
            {['Creative', 'Hyperreality', 'Steampunk', 'Animation', 'Business'].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm md:text-base"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Loader + Image Output */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start text-center">
        {/* Loader */}
        {loading && (
          <div className="mt-4">
            <Loader className="animate-spin text-white w-8 h-8" />
          </div>
        )}

        {/* Image Output */}
        {!loading && (
          <div className="mt-6 w-full">
            <img
              src={image || '/images/p2.jpg'}
              alt="AI Generated"
              className="w-full max-h-[450px] object-contain rounded-xl shadow-xl"
              loading="lazy"
              onLoad={image ? handleImageLoad : undefined}
              onError={image ? handleImageError : undefined}
            />
            {image && (
              <>
                <p className="text-white max-h-[300px] mt-3 text-base md:text-lg">
                  Image generated successfully!
                </p>
                <Button
                  onClick={handleDownloadImage}
                  className="mt-4 bg-orange-500 hover:bg-orange-700"
                >
                  Download
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
