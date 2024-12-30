import React from 'react';
import { useState, useEffect } from 'react';
import { Search, Settings } from 'lucide-react';
import axios from 'axios';

const SpeechSeparation = () => {
    const projectFiles = [
        { id: 1, name: 'SMOM.pdf', type: 'pdf' },
        { id: 2, name: 'STATISTICS.pdf', type: 'pdf' },
        { id: 3, name: 'SEPARATED AUDIO', type: 'folder' },
        { id: 4, name: 'TRANSCRIPTION', type: 'folder' }
    ];

    const projectid = "6772dd8246968c30e5f951ec";

    const [speechFiles, setSpeechFiles] = useState([]);

    useEffect(() => {
        axios.get(`/api/speech/${projectid}`).then(response => {
            setSpeechFiles(response.data.speakerFiles);
        })
            .catch((error) => {

                console.log('Error:', error);

            })


    });

    const handleAudioClick = (filePath) => {
        // Trigger download or play the audio
        const link = document.createElement("a");
        link.href = filePath;
        link.download = ""; // Leave empty to suggest the filename from the server
        link.click();
    };

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 border-r p-4">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6">
                        <img src="../src/assets/logo.png" alt="Logo" className="w-full h-full" />
                    </div>
                    <span className="font-medium">My Projects</span>
                    <button className="ml-auto">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 17.225C12.3417 17.225 12.1834 17.1667 12.0584 17.0417L6.62502 11.6083C5.74169 10.725 5.74169 9.27499 6.62502 8.39165L12.0584 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1834 3.19999 13.1834 3.59999 12.9417 3.84165L7.50836 9.27499C7.10836 9.67499 7.10836 10.325 7.50836 10.725L12.9417 16.1583C13.1834 16.4 13.1834 16.8 12.9417 17.0417C12.8167 17.1583 12.6584 17.225 12.5 17.225Z" fill="#787486" />
                        </svg>

                    </button>
                </div>

                {/* Project List */}
                <div className="space-y-2">
                    <div className="text-xs font-medium text-black-500 mb-2">MY PROJECTS</div>
                    {projectFiles.map(file => (
                        <React.Fragment key={file.id}>
                            <div
                                className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer"
                            >
                                {/* Explicit logic for dot color */}
                                <div
                                    className={`w-1.5 h-1.5 rounded-full ${file.name === 'SEPARATED AUDIO' ? 'bg-red-500' : 'bg-black'
                                        }`}
                                ></div>
                                <span className="text-black">{file.name}</span>
                            </div>
                            {/* Add nested files for "SEPARATED AUDIO" */}
                            {file.name === 'SEPARATED AUDIO' && (
                                <div className="ml-6 space-y-2">
                                    {speechFiles.map((audio, index) => (
                                        <div
                                            key={audio._id}  // Use _id as the key for unique identification
                                            className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer text-[#787486]"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                            {/* Display the speaker's label or default text */}
                                            <span>{audio.label || `Speaker ${index + 1}`}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </React.Fragment>
                    ))}
                </div>



                {/* Settings */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gray-600 cursor-pointer">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Settings</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">

                <div className="flex justify-between items-center mb-6">
                    {/* Search Bar */}
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
                        />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                        <button className="w-6 h-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9955 13.75H12.0045" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <button className="w-6 h-6">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.02 0.910004C5.71 0.910004 3.02 3.6 3.02 6.91V9.8C3.02 10.41 2.76 11.34 2.45 11.86L1.3 13.77C0.589996 14.95 1.08 16.26 2.38 16.7C6.69 18.14 11.34 18.14 15.65 16.7C16.86 16.3 17.39 14.87 16.73 13.77L15.58 11.86C15.28 11.34 15.02 10.41 15.02 9.8V6.91C15.02 3.61 12.32 0.910004 9.02 0.910004Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                            </svg>

                        </button>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                <img src="../src/assets/laiba.jpeg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Laiba Fatima</span>
                                <span className="text-xs text-gray-500">Pakistan</span>
                            </div>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-semibold">SEPARATED AUDIO</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                    <img src={`../src/assets/person.png`} alt={`User ${i}`} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* File Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ml-20">
                    {speechFiles.map((file, index) => (
                        <div
                            key={file._id}
                            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                            style={{ height: "230px", width: "200px" }}
                            onClick={() => handleAudioClick(file.filePath)} // Trigger on click
                        >
                            <div className="mb-4">
                                <img src="../src/assets/audio.png" alt="audio" height="105" width="94" />
                            </div>
                            <span className="text-sm font-medium text-center">{file.label || `Speaker ${index + 1}`}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SpeechSeparation;