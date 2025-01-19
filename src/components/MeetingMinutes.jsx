import React, { useState } from 'react';
import { Edit2, Save } from 'lucide-react';

const MeetingMinutes = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [minutes, setMinutes] = useState({
        date: "January 19, 2025",
        time: "10:00 AM EST",
        attendees: "Laiba (Chair), Abdullah, Speaker 3",
        agenda: [
            "Marketing Strategy Review",
            "Design Phase Discussion",
            "Creative Work Allocation"
        ],
        keyPoints: [
            "Initial marketing strategy draft completed",
            "Design phase to be completed by Friday",
            "Discussion on outsourcing creative work"
        ],
        actionItems: [
            {
                task: "Complete design phase",
                owner: "Abdullah",
                deadline: "Friday"
            },
            {
                task: "Decision on creative work outsourcing",
                owner: "Team",
                deadline: "Next Meeting"
            }
        ]
    });

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
    };

    const EditableText = ({ value, onChange, multiline }) => {
        if (!isEditing) {
            return <p className="text-gray-700">{value}</p>;
        }

        return multiline ? (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2 border rounded-md bg-white bg-opacity-50"
                rows={3}
            />
        ) : (
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2 border rounded-md bg-white bg-opacity-50"
            />
        );
    };

    const EditableList = ({ items, onChange }) => {
        if (!isEditing) {
            return (
                <ul className="list-disc ml-6 space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                    ))}
                </ul>
            );
        }

        return (
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => {
                                const newItems = [...items];
                                newItems[index] = e.target.value;
                                onChange(newItems);
                            }}
                            className="w-full p-2 border rounded-md bg-white bg-opacity-50"
                        />
                        <button
                            onClick={() => {
                                const newItems = items.filter((_, i) => i !== index);
                                onChange(newItems);
                            }}
                            className="text-red-500 hover:text-red-700"
                        >
                            ×
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => onChange([...items, ""])}
                    className="text-blue-500 hover:text-blue-700"
                >
                    + Add Item
                </button>
            </div>
        );
    };

    return (
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Meeting Minutes</h2>
                <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                    {isEditing ? (
                        <>
                            <Save className="w-4 h-4" />
                            <span>Save</span>
                        </>
                    ) : (
                        <>
                            <Edit2 className="w-4 h-4" />
                            <span>Edit</span>
                        </>
                    )}
                </button>
            </div>

            <div className="space-y-6">
                <div className="bg-white bg-opacity-30 rounded-xl p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium mb-2">Date</h3>
                            <EditableText
                                value={minutes.date}
                                onChange={(value) => setMinutes({...minutes, date: value})}
                            />
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Time</h3>
                            <EditableText
                                value={minutes.time}
                                onChange={(value) => setMinutes({...minutes, time: value})}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-medium mb-2">Attendees</h3>
                        <EditableText
                            value={minutes.attendees}
                            onChange={(value) => setMinutes({...minutes, attendees: value})}
                        />
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Agenda</h3>
                        <EditableList
                            items={minutes.agenda}
                            onChange={(value) => setMinutes({...minutes, agenda: value})}
                        />
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Key Points Discussed</h3>
                        <EditableList
                            items={minutes.keyPoints}
                            onChange={(value) => setMinutes({...minutes, keyPoints: value})}
                        />
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Action Items</h3>
                        {!isEditing ? (
                            <ul className="list-disc ml-6 space-y-2">
                                {minutes.actionItems.map((item, index) => (
                                    <li key={index} className="text-gray-700">
                                        {item.task} - {item.owner} (Due: {item.deadline})
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="space-y-2">
                                {minutes.actionItems.map((item, index) => (
                                    <div key={index} className="grid grid-cols-3 gap-2">
                                        <input
                                            type="text"
                                            value={item.task}
                                            onChange={(e) => {
                                                const newItems = [...minutes.actionItems];
                                                newItems[index] = {...item, task: e.target.value};
                                                setMinutes({...minutes, actionItems: newItems});
                                            }}
                                            placeholder="Task"
                                            className="p-2 border rounded-md bg-white bg-opacity-50"
                                        />
                                        <input
                                            type="text"
                                            value={item.owner}
                                            onChange={(e) => {
                                                const newItems = [...minutes.actionItems];
                                                newItems[index] = {...item, owner: e.target.value};
                                                setMinutes({...minutes, actionItems: newItems});
                                            }}
                                            placeholder="Owner"
                                            className="p-2 border rounded-md bg-white bg-opacity-50"
                                        />
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={item.deadline}
                                                onChange={(e) => {
                                                    const newItems = [...minutes.actionItems];
                                                    newItems[index] = {...item, deadline: e.target.value};
                                                    setMinutes({...minutes, actionItems: newItems});
                                                }}
                                                placeholder="Deadline"
                                                className="p-2 border rounded-md bg-white bg-opacity-50 flex-grow"
                                            />
                                            <button
                                                onClick={() => {
                                                    const newItems = minutes.actionItems.filter((_, i) => i !== index);
                                                    setMinutes({...minutes, actionItems: newItems});
                                                }}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={() => setMinutes({
                                        ...minutes,
                                        actionItems: [...minutes.actionItems, { task: "", owner: "", deadline: "" }]
                                    })}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    + Add Action Item
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingMinutes;