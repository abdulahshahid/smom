import React, { useState } from 'react';
import { Upload, HardDrive, FileText, MoreVertical, Plus, Cloud, Search, Bell, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const DashboardPage = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    // Sample data for recent projects
    const recentProjects = [
        {
            id: 1,
            name: "Weekly Team Sync",
            date: "2025-01-15",
            status: "Completed",
            participants: 5,
            duration: "45 mins"
        },
        {
            id: 2,
            name: "Product Review",
            date: "2025-01-14",
            status: "Processing",
            participants: 3,
            duration: "60 mins"
        },
        {
            id: 3,
            name: "Client Meeting",
            date: "2025-01-13",
            status: "Draft",
            participants: 4,
            duration: "30 mins"
        }
    ];

    // Sample stats data
    const stats = [
        {
            title: "Total Projects",
            value: "24",
            change: "+12%",
            isIncrease: true
        },
        {
            title: "Processing Time",
            value: "1.2 hrs",
            change: "-8%",
            isIncrease: false
        },
        {
            title: "Storage Used",
            value: "45 GB",
            change: "+5%",
            isIncrease: true
        }
    ];

    const handleLocalUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'audio/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            console.log('Uploading local file:', file);
        };
        input.click();
    };

    const handleGoogleDriveUpload = () => {
        console.log('Opening Google Drive picker');
    };

    const handleDropboxUpload = () => {
        console.log('Opening Dropbox chooser');
    };

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation Bar */}
            <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-blue-600">Minutes.ai</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="w-64 px-4 py-2 pl-10 pr-4 rounded-lg text-sm border border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            </div>
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <Bell className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                JD
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                                        <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                    </div>
                                    <span className={`flex items-center ${stat.isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                                        {stat.isIncrease ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                                        <span className="ml-1 text-sm">{stat.change}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">Quick Import</h2>
                            <button
                                onClick={() => setIsUploadModalOpen(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center transition-colors"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                New Project
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div
                                className="group rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-50 p-6"
                                onClick={handleGoogleDriveUpload}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <Cloud className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Google Drive</h3>
                                        <p className="text-gray-600 text-sm">Import from Drive</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="group rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-indigo-50 to-purple-50 p-6"
                                onClick={handleDropboxUpload}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                        <Cloud className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Dropbox</h3>
                                        <p className="text-gray-600 text-sm">Import from Dropbox</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="group rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-50 to-pink-50 p-6"
                                onClick={handleLocalUpload}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                        <HardDrive className="w-6 h-6 text-purple-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Local Device</h3>
                                        <p className="text-gray-600 text-sm">Upload from computer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {recentProjects.map((project) => (
                                <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-gray-900">{project.name}</h3>
                                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                                    <span className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {project.date}
                                                    </span>
                                                    <span>Duration: {project.duration}</span>
                                                    <span>{project.participants} participants</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    project.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {project.status}
                                            </span>
                                            <div className="relative">
                                                <button
                                                    onClick={() => toggleDropdown(project.id)}
                                                    className="p-2 hover:bg-gray-100 rounded-lg"
                                                >
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                                {openDropdownId === project.id && (
                                                    <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                        <div className="py-1">
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                                                                View Details
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                                                                Share Project
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left">
                                                                Download Minutes
                                                            </button>
                                                            <button className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full text-left">
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;