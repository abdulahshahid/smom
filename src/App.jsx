import { Routes, Route } from 'react-router-dom';
import ProjectView from './components/ProjectView';
import SpeechSeparation from './components/SpeechSeparation';
import Transcription from './components/Transcription';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProjectView></ProjectView>}></Route>
      <Route path='/separated-speech' element={<SpeechSeparation></SpeechSeparation>}></Route>
      <Route path='/transcription' element={<Transcription></Transcription>}></Route>
    </Routes>
  );
}

export default App;