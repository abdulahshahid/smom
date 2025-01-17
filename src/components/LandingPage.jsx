import React from 'react';
import { ChevronRight, Upload, FileText, Users, FileClock, Share2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const features = [
        {
            icon: <Upload className="w-6 h-6 text-blue-600" />,
            title: "Multiple Upload Options",
            description: "Upload audio files from your device, Google Drive, or Dropbox with ease."
        },
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Smart Speaker Recognition",
            description: "Advanced AI automatically identifies and separates different speakers in your meetings."
        },
        {
            icon: <FileText className="w-6 h-6 text-blue-600" />,
            title: "Accurate Transcription",
            description: "Get precise transcriptions with speaker labels that you can easily customize."
        },
        {
            icon: <FileClock className="w-6 h-6 text-blue-600" />,
            title: "Template-based Minutes",
            description: "Generate professional meeting minutes using our customizable templates."
        },
        {
            icon: <Share2 className="w-6 h-6 text-blue-600" />,
            title: "Easy Collaboration",
            description: "Share projects with team members and collaborate seamlessly."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Transform Your Meetings into Actionable Minutes
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Automatically generate professional meeting minutes from audio recordings using AI-powered speaker recognition and transcription.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
                                onClick={() => navigate("/login")}
                            >
                                Get Started Free
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </button>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90">
                            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                        <span className="font-bold text-xl">1</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">Upload Recording</h3>
                                    <p className="text-gray-600 text-center">Upload your meeting recording from any device or cloud storage</p>
                                </div>
                                <div className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                        <span className="font-bold text-xl">2</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">AI Processing</h3>
                                    <p className="text-gray-600 text-center">Our AI identifies speakers and transcribes the conversation</p>
                                </div>
                                <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                        <span className="font-bold text-xl">3</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">Get Minutes</h3>
                                    <p className="text-gray-600 text-center">Download your formatted meeting minutes in PDF or DOCX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90">
                            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-lg transition-shadow">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Ready to Streamline Your Meeting Minutes?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join thousands of professionals who save time and improve meeting documentation with our AI-powered solution.
                            </p>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;