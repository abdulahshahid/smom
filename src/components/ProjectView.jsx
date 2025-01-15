import React from 'react';
import { Search, Share, Settings } from 'lucide-react';
import ProjectFilesGrid from './ProjectFilesGrid';
import { useNavigate } from "react-router-dom";

const ProjectView = () => {

    const navigate = useNavigate();

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
                    <div className="text-xs font-medium text-gray-500 mb-2">MY PROJECTS</div>

                    <div className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>SMOM.pdf</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>STATISTICS.pdf</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={() => navigate("/separated-speech")}>
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>SEPARATED AUDIO</span>
                    </div>

                    {/* TRANSCRIPTION */}
                    <div className="flex items-center gap-2 text-sm hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={() => navigate("/transcription")}>
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>TRANSCRIPTION</span>
                    </div>
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
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" fill="#5030E5" fill-opacity="0.2" />
                                    <path d="M16.9933 19.3167H18C20.3828 19.3167 22.3167 17.3829 22.3167 15C22.3167 12.6172 20.3828 10.6833 18 10.6833H17C16.6359 10.6833 16.35 10.9785 16.35 11.3333C16.35 11.6895 16.6438 11.9833 17 11.9833H18C19.6638 11.9833 21.0167 13.3362 21.0167 15C21.0167 16.6638 19.6638 18.0167 18 18.0167H16.9933C16.6372 18.0167 16.3433 18.3105 16.3433 18.6667C16.3433 19.0229 16.6372 19.3167 16.9933 19.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                    <path d="M12 19.3167H13C13.3562 19.3167 13.65 19.0229 13.65 18.6667C13.65 18.3105 13.3562 18.0167 13 18.0167H12C10.3362 18.0167 8.98333 16.6638 8.98333 15C8.98333 13.3362 10.3362 11.9833 12 11.9833H13C13.3562 11.9833 13.65 11.6895 13.65 11.3333C13.65 10.9772 13.3562 10.6833 13 10.6833H12C9.61716 10.6833 7.68333 12.6172 7.68333 15C7.68333 17.3829 9.61716 19.3167 12 19.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                    <path d="M12.3333 15.65H17.6667C18.0228 15.65 18.3167 15.3562 18.3167 15C18.3167 14.6438 18.0228 14.35 17.6667 14.35H12.3333C11.9772 14.35 11.6833 14.6438 11.6833 15C11.6833 15.3562 11.9772 15.65 12.3333 15.65Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3" />
                                </svg>

                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">

                        <button className="px-4 py-2 rounded-lg flex items-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9H12" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 12V6" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" fill="#5030E5" fill-opacity="0.2" />
                            </svg>

                            <span>Invite</span>
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                        <img src={`../src/assets/person.png`} alt={`User ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z" fill="#787486" />
                                <path d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z" fill="#787486" />
                                <path d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z" fill="#787486" />
                                <path d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z" fill="#787486" />
                            </svg>

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