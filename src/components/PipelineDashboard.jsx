import React, { useState, useEffect } from 'react';
import { Clock, Users, FileText, Download, Check, Play, Pause, Share2, Calendar } from 'lucide-react';
import MeetingMinutes from './MeetingMinutes';

// Processing Step Component
const ProcessingStep = ({ title, status, isActive, progress }) => (
    <div className={`flex items-center gap-3 p-4 rounded-xl ${isActive ? 'bg-white bg-opacity-30 border-2 border-blue-500' : 'bg-white bg-opacity-20'}`}>
        <div className={`relative w-8 h-8 rounded-full flex items-center justify-center ${status === 'completed' ? 'bg-green-500' :
            status === 'processing' ? 'bg-blue-500' :
                'bg-gray-200'
            }`}>
            {status === 'completed' ? (
                <Check className="w-5 h-5 text-white" />
            ) : status === 'processing' ? (
                <>
                    <div className="absolute inset-0 rounded-full">
                        <svg className="w-8 h-8 transform -rotate-90">
                            <circle
                                cx="16"
                                cy="16"
                                r="14"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                className="text-blue-200"
                            />
                            <circle
                                cx="16"
                                cy="16"
                                r="14"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                className="text-blue-600"
                                strokeDasharray={`${progress * 88} 88`}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </>
            ) : null}
        </div>
        <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">
                {status === 'completed' ? 'Completed' :
                    status === 'processing' ? `Processing ${Math.round(progress * 100)}%` :
                        'Waiting...'}
            </p>
        </div>
    </div>
);

// Audio Segment Component
const AudioSegment = ({ speaker, isPlaying, onPlayPause }) => {
    const waveformData = Array.from({ length: 50 }, () => Math.random() * 100);

    return (
        <div className="flex items-center space-x-4">
            <button
                onClick={onPlayPause}
                className="p-2 rounded-full bg-blue-600 bg-opacity-90 text-white hover:bg-opacity-100 transition-all"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex-grow h-12 bg-gray-100 rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-center">
                    {waveformData.map((height, i) => (
                        <div
                            key={i}
                            className={`w-1 mx-px ${isPlaying ? 'bg-blue-500' : 'bg-blue-300'}`}
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Dashboard Component
const MeetingDashboard = () => {
    const [speakerLabels, setSpeakerLabels] = useState({
        'SPEAKER_00': 'Laiba',
        'SPEAKER_01': 'Abdullah',
        'SPEAKER_02': ''
    });

    const projectData = {
        title: "Q2 Marketing Strategy Meeting"
    };

    const [selectedTemplate, setSelectedTemplate] = useState('standard');
    const [currentStep, setCurrentStep] = useState('diarization');
    const [stepProgress, setStepProgress] = useState({
        diarization: 0,
        transcription: 0,
        minutes: 0
    });
    const [processingStatus, setProcessingStatus] = useState({
        diarization: 'processing',
        transcription: 'waiting',
        minutes: 'waiting'
    });
    const [playingSpeaker, setPlayingSpeaker] = useState(null);
    const [processingComplete, setProcessingComplete] = useState(false);

    // Stats data
    const statsData = {
        duration: '32:15',
        speakerCount: 3,
        totalUtterances: 24
    };

    // Meeting data
    const meetingData = {
        speakers: [
            {
                id: 'SPEAKER_00',
                audioUrl: '#',
                dialogues: [
                    { time: '00:00', text: 'Good morning everyone. Thanks for joining today\'s meeting. We\'ve got a lot to cover, so let\'s dive right in. First, Abdullah, could you update us on the marketing strategy?' }
                ]
            },
            {
                id: 'SPEAKER_01',
                audioUrl: '#',
                dialogues: [
                    { time: '00:10', text: 'Sure, Laiba. I\'ve completed the initial draft for the marketing strategy and now I\'m moving to design phase and that should be finished by Friday.' }
                ]
            },
            {
                id: 'SPEAKER_02',
                audioUrl: '#',
                dialogues: [
                    { time: '00:21', text: 'Are you doing the final decision yourself or are we outsourcing the creative work?' }
                ]
            }
        ],
        summary: "Meeting focused on marketing strategy updates. Abdullah reported completion of initial draft and upcoming design phase completion by Friday. Discussion about creative work execution and potential outsourcing to UWASE for branding materials."
    };

    const exportTemplates = [
        { id: 'standard', name: 'Standard Minutes' },
        { id: 'detailed', name: 'Detailed Report' },
        { id: 'executive', name: 'Executive Summary' }
    ];

    // Handle speaker label changes
    const handleSpeakerLabelChange = (speakerId, newLabel) => {
        setSpeakerLabels(prev => ({
            ...prev,
            [speakerId]: newLabel
        }));
    };

    // Handle audio play/pause
    const handlePlayPause = (speakerId) => {
        setPlayingSpeaker(playingSpeaker === speakerId ? null : speakerId);
    };

    // Simulate progress
    useEffect(() => {
        let interval;

        if (currentStep === 'diarization' && stepProgress.diarization < 1) {
            interval = setInterval(() => {
                setStepProgress(prev => ({
                    ...prev,
                    diarization: Math.min(prev.diarization + 0.1, 1)
                }));
            }, 1000);
        } else if (currentStep === 'transcription' && stepProgress.transcription < 1) {
            interval = setInterval(() => {
                setStepProgress(prev => ({
                    ...prev,
                    transcription: Math.min(prev.transcription + 0.05, 1)
                }));
            }, 1000);
        } else if (currentStep === 'minutes' && stepProgress.minutes < 1) {
            interval = setInterval(() => {
                setStepProgress(prev => ({
                    ...prev,
                    minutes: Math.min(prev.minutes + 0.15, 1)
                }));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [currentStep, stepProgress]);

    // Handle step transitions
    useEffect(() => {
        if (stepProgress.diarization >= 1 && currentStep === 'diarization') {
            setProcessingStatus(prev => ({ ...prev, diarization: 'completed', transcription: 'processing' }));
            setCurrentStep('transcription');
        } else if (stepProgress.transcription >= 1 && currentStep === 'transcription') {
            setProcessingStatus(prev => ({ ...prev, transcription: 'completed', minutes: 'processing' }));
            setCurrentStep('minutes');
        } else if (stepProgress.minutes >= 1 && currentStep === 'minutes') {
            setProcessingStatus(prev => ({ ...prev, minutes: 'completed' }));
            setProcessingComplete(true);
        }
    }, [stepProgress, currentStep]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Project Header */}
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 border border-white border-opacity-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{projectData.title}</h1>
                            <div className="flex flex-wrap gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date().toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {statsData.speakerCount} Participants
                                </div>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share Project
                        </button>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <ProcessingStep
                        title="Diarization & Separation"
                        status={processingStatus.diarization}
                        isActive={currentStep === 'diarization'}
                        progress={stepProgress.diarization}
                    />
                    <ProcessingStep
                        title="Transcription"
                        status={processingStatus.transcription}
                        isActive={currentStep === 'transcription'}
                        progress={stepProgress.transcription}
                    />
                    <ProcessingStep
                        title="Minutes Generation"
                        status={processingStatus.minutes}
                        isActive={currentStep === 'minutes'}
                        progress={stepProgress.minutes}
                    />
                </div>

                {/* Stats Grid */}
                {processingStatus.diarization === 'completed' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
                            <div className="flex items-center space-x-4">
                                <Clock className="h-8 w-8 text-blue-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="text-2xl font-bold">{statsData.duration}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
                            <div className="flex items-center space-x-4">
                                <Users className="h-8 w-8 text-green-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Speakers</p>
                                    <p className="text-2xl font-bold">{statsData.speakerCount}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
                            <div className="flex items-center space-x-4">
                                <FileText className="h-8 w-8 text-purple-500" />
                                <div>
                                    <p className="text-sm text-gray-500">Total Utterances</p>
                                    <p className="text-2xl font-bold">{statsData.totalUtterances}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content Grid */}
                {processingComplete && (
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Transcription Section */}
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
                                <h2 className="text-xl font-semibold mb-4">Meeting Transcription</h2>
                                <div className="space-y-6">
                                    {meetingData.speakers.map((speaker) => (
                                        <div key={speaker.id} className="bg-white bg-opacity-30 rounded-xl p-4 space-y-2">
                                            <div className="flex items-center flex-wrap gap-4 mb-2">
                                                {/* Audio Segment */}
                                                <AudioSegment
                                                    speaker={speaker}
                                                    isPlaying={playingSpeaker === speaker.id}
                                                    onPlayPause={() => handlePlayPause(speaker.id)}
                                                />

                                                {/* Input Field for Speaker Label */}
                                                <input
                                                    type="text"
                                                    placeholder="Enter speaker name"
                                                    value={speakerLabels[speaker.id]}
                                                    onChange={(e) => handleSpeakerLabelChange(speaker.id, e.target.value)}
                                                    className="border rounded-md p-2 w-full max-w-xs bg-white bg-opacity-50 truncate"
                                                />
                                            </div>

                                            {/* Speaker Dialogues */}
                                            {speaker.dialogues.map((dialogue, idx) => (
                                                <div key={idx} className="ml-4">
                                                    <span className="text-sm text-gray-500">{dialogue.time}</span>
                                                    <p className="text-gray-700">{dialogue.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Summary Section */}
                            <MeetingMinutes></MeetingMinutes>

                            {/* Export Section */}
                            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
                                <h2 className="text-xl font-semibold mb-4">Export Minutes</h2>
                                <div className="flex items-center space-x-4">
                                    <select
                                        className="border rounded-md p-2 flex-1 bg-white bg-opacity-50"
                                        value={selectedTemplate}
                                        onChange={(e) => setSelectedTemplate(e.target.value)}
                                    >
                                        {exportTemplates.map(template => (
                                            <option key={template.id} value={template.id}>
                                                {template.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        <Download className="w-4 h-4" />
                                        <span>Export</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MeetingDashboard;