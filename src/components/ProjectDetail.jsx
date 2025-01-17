import React, { useState } from 'react';
import { FileText, Users, Play, Pause, Download, Clock, Share2, Calendar, MessageSquare } from 'lucide-react';

const ProjectDetails = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const stats = [
    { label: "Total Words", value: "7800" },
    { label: "Unique Words", value: "1200" },
    { label: "Speaking Ratio", value: "50% (John), 30% (Sarah), 20% (Mike)" },
    { label: "Active Questions", value: "5" },
  ];
  
  
  // Sample project data
  const projectData = {
    title: "Marketing Team Weekly Sync",
    date: "2024-01-18",
    duration: "45 minutes",
    participants: ["John Doe", "Sarah Smith", "Mike Johnson"],
    speakers: [
      {
        id: 1,
        name: "John Doe",
        audioUrl: "/speaker1.mp3",
        speakingTime: "15 minutes"
      },
      {
        id: 2,
        name: "Sarah Smith",
        audioUrl: "/speaker2.mp3",
        speakingTime: "20 minutes"
      },
      {
        id: 3,
        name: "Mike Johnson",
        audioUrl: "/speaker3.mp3",
        speakingTime: "10 minutes"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Project Header */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 border border-white border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">{projectData.title}</h1>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
              <Share2 className="w-4 h-4" />
              Share Project
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {projectData.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {projectData.duration}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {projectData.participants.length} Participants
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Speaker Segments */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Speaker Segments</h2>
              <div className="space-y-4">
                {projectData.speakers.map((speaker) => (
                  <div key={speaker.id} className="bg-white bg-opacity-30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-800">{speaker.name}</div>
                      <div className="text-sm text-gray-600">{speaker.speakingTime}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-blue-600 bg-opacity-90 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <div className="flex-grow bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Participants */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Participants</h2>
              <div className="space-y-2">
                {projectData.participants.map((participant, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white bg-opacity-30 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      {participant.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-gray-800">{participant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Right Column */}
          <div className="space-y-8">
            {/* Transcription */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Transcription</h2>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projectData.speakers.map((speaker, index) => (
                  <div key={index} className="bg-white bg-opacity-30 rounded-xl p-4">
                    <div className="font-medium text-gray-800 mb-2">{speaker.name}</div>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="text-sm text-gray-500 mt-2">00:15:30</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Minutes */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Meeting Minutes</h2>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-700">
                    <FileText className="w-4 h-4" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white bg-opacity-30 rounded-xl p-4">
                <h3 className="font-medium text-gray-800 mb-2">Summary</h3>
                <p className="text-gray-600 mb-4">
                  Key points discussed during the meeting including project updates, deadlines, and action items.
                </p>
                <h3 className="font-medium text-gray-800 mb-2">Action Items</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Update project timeline by Friday</li>
                  <li>Schedule follow-up meeting with stakeholders</li>
                  <li>Review and approve marketing materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;