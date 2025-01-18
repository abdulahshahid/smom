import { Routes, Route } from 'react-router-dom';
import ProjectView from './components/ProjectView';
import SpeechSeparation from './components/SpeechSeparation';
import Transcription from './components/Transcription';
import Landing from './components/LandingPage';
import Account from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import ProjectDetail from './components/ProjectDetail';
import MeetingDashboard from './components/PipelineDashboard';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/login' element={<Account></Account>}></Route>
      <Route path='/project' element={<ProjectDetail></ProjectDetail>}></Route>
      <Route path='/project-pipeline' element={<MeetingDashboard></MeetingDashboard>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/separated-speech' element={<SpeechSeparation></SpeechSeparation>}></Route>
      <Route path='/transcription' element={<Transcription></Transcription>}></Route>
    </Routes>
  );
}

export default App;