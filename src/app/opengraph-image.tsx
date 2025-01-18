import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "LinkFrameSocial - Decentralized Social Connections";
export const size = {
  width: 1200,
  height: 630, // Standard OpenGraph image size
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-purple-600 to-blue-500">
        <div tw="flex flex-col items-center text-center p-12 bg-white/90 rounded-2xl shadow-2xl">
          <h1 tw="text-6xl font-bold text-gray-900 mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-3xl text-gray-700">{PROJECT_DESCRIPTION}</h3>
          <div tw="mt-8 flex items-center">
            <span tw="text-xl text-gray-600 mr-2">Powered by</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 22H22L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span tw="text-xl font-semibold text-gray-800 ml-2">Farcaster Frames</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
