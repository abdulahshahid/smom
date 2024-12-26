import React from 'react';
import { Search, Share, Settings } from 'lucide-react';
import ProjectFilesGrid from './ProjectFilesGrid';

const ProjectView = () => {
    const projectFiles = [
        { id: 1, name: 'SMOM.pdf', type: 'pdf' },
        { id: 2, name: 'STATISTICS.pdf', type: 'pdf' },
        { id: 3, name: 'SEPARATED AUDIO', type: 'folder' },
        { id: 4, name: 'TRANSCRIPTION', type: 'folder' }
    ];

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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33334V12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
                    />
                </div>

                {/* Project List */}
                <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">MY PROJECTS</div>
                    {projectFiles.map(file => (
                        <div key={file.id} className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <span>{file.name}</span>
                        </div>
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
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-semibold">FYP EVALUATION</h1>
                        <div className="flex gap-1">
                            <span className="bg-purple-100 text-purple-600 p-1 rounded text-sm">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" fill="#5030E5" fill-opacity="0.2" />
                                    <path d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z" stroke="#5030E5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875" stroke="#5030E5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span className="bg-purple-100 text-purple-600 p-1 rounded text-sm">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99333 12.3167H11C13.3828 12.3167 15.3167 10.3829 15.3167 8.00001C15.3167 5.61717 13.3828 3.68334 11 3.68334H10C9.63586 3.68334 9.35 3.97847 9.35 4.33334C9.35 4.68952 9.64382 4.98334 10 4.98334H11C12.6638 4.98334 14.0167 6.33619 14.0167 8.00001C14.0167 9.66383 12.6638 11.0167 11 11.0167H9.99333C9.63716 11.0167 9.34333 11.3105 9.34333 11.6667C9.34333 12.0229 9.63716 12.3167 9.99333 12.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                    <path d="M5 12.3167H6C6.35618 12.3167 6.65 12.0229 6.65 11.6667C6.65 11.3105 6.35618 11.0167 6 11.0167H5C3.33618 11.0167 1.98333 9.66383 1.98333 8.00001C1.98333 6.33619 3.33618 4.98334 5 4.98334H6C6.35618 4.98334 6.65 4.68952 6.65 4.33334C6.65 3.97717 6.35618 3.68334 6 3.68334H5C2.61716 3.68334 0.683334 5.61717 0.683334 8.00001C0.683334 10.3829 2.61716 12.3167 5 12.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                    <path d="M5.33333 8.65H10.6667C11.0228 8.65 11.3167 8.35618 11.3167 8C11.3167 7.64382 11.0228 7.35 10.6667 7.35H5.33333C4.97716 7.35 4.68333 7.64382 4.68333 8C4.68333 8.35618 4.97716 8.65 5.33333 8.65Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="text-purple-600 bg-purple-50 px-4 py-2 rounded-lg flex items-center gap-2">
                            <span>Invite</span>
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                        <img src={`/api/placeholder/24/24`} alt={`User ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border">
                            <Share className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                {/* File Grid */}
                <ProjectFilesGrid />
            </div>
        </div>
    );
};

export default ProjectView;