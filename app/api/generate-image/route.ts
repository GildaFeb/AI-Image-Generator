import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const options = {
      method: 'POST',
      url: 'https://ai-image-generator-free.p.rapidapi.com/generate/stream',
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || 'ai-image-generator-free.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        prompt,
        negativePrompt: '',
        guidancescale: 7.5,
        style: '(No style)',
      },
    };

    const response = await axios.request(options);
    const rawData: unknown = response.data;
    const jsonString =
      typeof rawData === 'string'
        ? rawData.trim().split('\n').pop()
        : '';
    const parsedData: { urls?: string[] } = JSON.parse(jsonString || '{}');

    const imageUrl = Array.isArray(parsedData?.urls) ? parsedData.urls[0] : '';

    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { 
        error: error.response?.data?.message || error.message || 'Failed to generate image' 
      },
      { status: 500 }
    );
  }
}
