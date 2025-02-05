import { useContext } from 'react';
import './App.css'
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './comtext/UseContext';
function App() {
  const {recognition, speaking, setspeaking,Listening,setListening,res} = useContext(datacontext)
   
  return (
    <div className=' w-full h-full overflow-hidden flex justify-center items-center flex-col gap-9'>
      <img className=' h-80 py-10' src="/ai.png" alt="" />
      <span className=' text-white'>I am Shafra, your virtual assistant</span>
     {
      !speaking ?  <button
      onClick={()=>{
        setListening('listening...');
        setspeaking(true);
        recognition.start()
      }}
      
      className=' w-[180px] h-[40px] text-black flex bg-green-500 justify-center items-center gap-4 border-none rounded-full cursor-pointer font-bold text-[20px]'>Click here <CiMicrophoneOn className=' h-[30px] w-[30px] ' />
      </button>
      : <div>
        {
          !res ?
          <img className='w-full h-20' src="/speak.gif" alt="" />
          : 
          <img className='w-full h-20' src="/aiVoice.gif" alt="" />
        }
        <p className=' text-white font-bold text-[20px]'>{Listening}</p>
      </div>
     }
    </div>
  )
}

export default App
