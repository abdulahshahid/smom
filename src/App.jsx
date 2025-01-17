import { Routes, Route } from 'react-router-dom';
import ProjectView from './components/ProjectView';
import SpeechSeparation from './components/SpeechSeparation';
import Transcription from './components/Transcription';
import Landing from './components/LandingPage';
import Account from './components/LoginSignup';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/login' element={<Account></Account>}></Route>
      <Route path='/separated-speech' element={<SpeechSeparation></SpeechSeparation>}></Route>
      <Route path='/transcription' element={<Transcription></Transcription>}></Route>
    </Routes>
  );
}

export default App;