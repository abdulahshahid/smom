import React from 'react';

const ProjectFilesGrid = () => {
  const projectFiles = [
    { id: 1, name: 'SMOM.pdf', type: 'pdf' },
    { id: 2, name: 'STATISTICS.pdf', type: 'pdf' },
    { id: 3, name: 'SEPARATED AUDIO', type: 'folder' },
    { id: 4, name: 'TRANSCRIPTION', type: 'folder' }
  ];

  // Separate files by type
  const pdfFiles = projectFiles.filter(file => file.type === 'pdf');
  const folderFiles = projectFiles.filter(file => file.type === 'folder');

  return (
    <div className="space-y-6">
      {/* PDF Files Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pdfFiles.map(file => (
          <div 
            key={file.id} 
            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            style={{ height: '230px', width: '200px' }}
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
            <span className="text-sm font-medium text-center">{file.name}</span>
          </div>
        ))}
      </div>

      {/* Folders Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {folderFiles.map(file => (
          <div 
            key={file.id} 
            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            style={{ height: '230px', width: '200px' }}
          >
            <div className="mb-4">
              <img 
                src="../src/assets/open-folder.png" 
                alt="Folder" 
                height={120} 
                width={120} 
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-center">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilesGrid;