import logo from './logo.svg';
import './App.css';
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import {useState} from 'react';

import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';


function App() {
  const [audioData,setAudioData] = useState({
    recordState: null,
      audioData: null
  })

  const start = () => {
    setAudioData({
      recordState: RecordState.START
    });
  };

 const pause = () => {
    setAudioData({
      recordState: RecordState.PAUSE
    });
  };

 const stop = () => {
    setAudioData({
      recordState: RecordState.STOP
    });
    
  };

 const onStop = (data) => {
   console.log(data)
    setAudioData({
      audioData: data
    });
    console.log("onStop: audio data", data);
  };

  return (
    <div className="App">
       <AudioReactRecorder
          state={audioData.recordState}
          onStop={onStop}
          backgroundColor="rgb(255,255,255)"
        />

        {audioData.recordState===RecordState.START?<MicIcon/>:<MicOffIcon/>}

         <audio
          id="audio"
          controls
          src={audioData.audioData ? audioData.audioData.url : null}
        ></audio>
        <button id="record" onClick={start}>
          Start
        </button>
        <button id="pause" onClick={pause}>
          Pause
        </button>
        <button id="stop" onClick={stop}>
          Stop
        </button>

    </div>
  );
}

export default App;
