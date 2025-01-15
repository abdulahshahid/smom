import React from 'react';
import { useNavigate } from "react-router-dom";

const ProjectFilesGrid = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-10">
      {/* PDF Files Row */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ml-20">
        {/* SMOM.pdf */}
        <div
          className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          style={{ height: "230px", width: "200px" }}
        >
          <div className="mb-4">
            <img
              src="../src/assets/pdf-icon.png"
              alt="PDF"
              height={120}
              width={122}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-center">SMOM.pdf</span>
        </div>

        {/* STATISTICS.pdf */}
        <div
          className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          style={{ height: "230px", width: "200px" }}
        >
          <div className="mb-4">
            <img
              src="../src/assets/pdf-icon.png"
              alt="PDF"
              height={120}
              width={122}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-center">STATISTICS.pdf</span>
        </div>
      </div>

      {/* Folders Row */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ml-20">
        {/* SEPARATED AUDIO */}
        <div
          className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          style={{ height: "230px", width: "200px" }} onClick={() => navigate("/separated-speech")}
        >
          <div className="mb-4">
            <svg
              width="122"
              height="119"
              viewBox="0 0 122 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9638 17.2508C12.2637 17.1549 6.76116 22.0514 6.67341 28.1872L6.34541 51.122C2.58194 52.5942 0.181321 56.3217 0.990557 60.2993L10.7382 108.21C11.798 113.42 16.7236 117.229 22.5064 117.312L97.4813 118.384C103.264 118.467 108.297 114.8 109.505 109.623L120.619 62.0101C121.541 58.0574 119.248 54.2629 115.529 52.6836L115.658 43.6362C115.746 37.5003 110.386 32.4485 103.685 32.3527L64.1405 31.7872L55.7905 21.9479C53.5262 19.2795 50.0622 17.6955 46.3771 17.6428L18.9638 17.2508ZM103.407 51.7952L103.527 43.4627L63.9816 42.8971C60.2966 42.8444 56.8326 41.2604 54.5684 38.592L46.2182 28.7528L18.8049 28.3607L18.4871 50.5807L103.407 51.7952Z"
                fill="#09244B"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-center">SEPARATED AUDIO</span>
        </div>

        {/* TRANSCRIPTION */}
        <div
          className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          style={{ height: "230px", width: "200px" }} onClick={() => navigate("/transcription")}
        >
          <div className="mb-4">
            <svg
              width="122"
              height="119"
              viewBox="0 0 122 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9638 17.2508C12.2637 17.1549 6.76116 22.0514 6.67341 28.1872L6.34541 51.122C2.58194 52.5942 0.181321 56.3217 0.990557 60.2993L10.7382 108.21C11.798 113.42 16.7236 117.229 22.5064 117.312L97.4813 118.384C103.264 118.467 108.297 114.8 109.505 109.623L120.619 62.0101C121.541 58.0574 119.248 54.2629 115.529 52.6836L115.658 43.6362C115.746 37.5003 110.386 32.4485 103.685 32.3527L64.1405 31.7872L55.7905 21.9479C53.5262 19.2795 50.0622 17.6955 46.3771 17.6428L18.9638 17.2508ZM103.407 51.7952L103.527 43.4627L63.9816 42.8971C60.2966 42.8444 56.8326 41.2604 54.5684 38.592L46.2182 28.7528L18.8049 28.3607L18.4871 50.5807L103.407 51.7952Z"
                fill="#09244B"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-center">TRANSCRIPTION</span>
        </div>
      </div>
    </div>

  );
};

export default ProjectFilesGrid;