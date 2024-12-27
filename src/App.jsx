import { BrowserRouter as Router } from 'react-router-dom';
import ProjectView from './components/ProjectView';
import SpeechSeparation from './components/SpeechSeparation';
import Transcription from './components/Transcription';

function App() {
  return (
    <Router>
      <Transcription />
    </Router>
  );
}

export default App;