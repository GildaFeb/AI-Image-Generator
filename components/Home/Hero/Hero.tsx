"use client";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Hero = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerateImage = async () => {
        setLoading(true);
        const options = {
            method: 'POST',
            url: 'https://ai-image-generator-free.p.rapidapi.com/generate/stream',
            headers: {
                'x-rapidapi-key': '54619da89emsh1af7d69ba81945ap1fab8ejsnf8dfa3f028c1',
                'x-rapidapi-host': 'ai-image-generator-free.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            // Remove type from axios.request, let axios handle it dynamically
            data: {
                prompt: prompt,
                negativePrompt: '',
                guidancescale: 7.5,
                style: '(No style)',
            }
        };

        try {
            const response: any = await axios.request(options);
            let imageUrl = "";
            // Find the JSON part in the response string
            const jsonString = response.data.trim().split('\n').pop(); // gets last line
            const parsedData = JSON.parse(jsonString);

            if (parsedData?.urls && Array.isArray(parsedData.urls)) {
                imageUrl = parsedData.urls[0];
            }

            console.log("Parsed JSON:", parsedData);
            console.log("Generated image URL:", imageUrl);
            setImage(imageUrl);

        } catch (error: unknown) {
            if ((axios as any).isAxiosError(error as any)) {
                const axiosError = error as any;
                if (axiosError.response) {
                    console.error("Axios error:", axiosError.response);
                    toast.error(`Error: ${axiosError.response?.data && (axiosError.response.data as any).message ? (axiosError.response.data as any).message : axiosError.message}`,
                        { style: { background: 'white', color: 'black' } });
                } else {
                    toast.error(axiosError.message, { style: { background: 'white', color: 'black' } });
                }
            } else if (error instanceof Error) {
                const err = error as Error;
                console.error("Unexpected error:", err);
                toast.error(err.message, { style: { background: 'white', color: 'black' } });
            } else {
                toast.error('An unexpected error occurred.', { style: { background: 'white', color: 'black' } });
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
        link.target = "_blank";
        link.click();
        toast.success('Image downloaded successfully!', { style: { background: 'white', color: 'black' } });
    };

    // Handler for image load success
    const handleImageLoad = () => {
        toast.success('Image generated successfully!', { style: { background: 'white', color: 'black' } });
        setPrompt('');
    };

    // Handler for image load error
    const handleImageError = () => {
        setImage("");
        toast.error('Failed to load generated image.', { style: { background: 'white', color: 'black' } });
    };

    return (
        <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
            <div className="relative z-0 text-white flex flex-col items-center justify-center">
                <h3 data-aos="fade-up" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-pink-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent z-10">
                    Create Beautiful Image with <br /> AI Image Generator
                </h3>
                <p 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-4 text-lg sm:text-xl md:text-[1.5rem] text-center max-w-2xl leading-relaxed">
                    Generate stunning images using AI technology. Just enter your prompt and let the AI do the magic!
                </p>

                <div className="h-11 md:h-16 w-[95%] sm:w-[80%] md:w-[80%] lg:w-[70%] xl-[60%] bg-white rounded-lg shadow-lg mt-12 px-2 md:px-4 flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Enter your prompt here..."
                        className="w-full h-[80%] p-4 rounded-lg bg-gray-800 outline-none text-white block flex-1 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg xl:placeholder:text-xl"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button
                        variant="destructive"
                        size="lg"
                        onClick={handleGenerateImage}
                        className="bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:from-blue-600 hover:to-violet-700 ml-2 h-[80%] my-2 transition-all duration-300 cursor-pointer"
                    >
                        Generate Image
                    </Button>
                </div>

                {/* Tags */}
                <div className="mt-8 flex flex-row sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 px-4 text-center">
                    <p className="text-sm sm:text-base md:text-lg font-medium">Popular Tags</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2 sm:mt-0">
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm md:text-base">Creative</Button>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm md:text-base">Hyperreality</Button>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm md:text-base">Steampunk</Button>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm md:text-base">Animation</Button>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm md:text-base">Business</Button>
                    </div>
                </div>

                {/* Loader */}
                {loading && (
                    <div className="flex justify-center mt-6">
                        <Loader className="animate-spin" />
                    </div>
                )}

                {/* Image Output */}
                {image && (
                    <div className="mt-8 flex flex-col items-center">
                        <img
                            src={image}
                            alt="AI Generated"
                            className="max-w-full h-[500px] rounded-lg shadow-lg"
                            loading="lazy"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                        {image && (
                            <p className="text-sm sm:text-base md:text-lg text-white mt-2">
                                Image generated successfully!
                            </p>
                        )}
                        <Button onClick={handleDownloadImage} className="mt-4 mb-4 bg-orange-500 hover:bg-orange-800">
                            Download
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero
    
