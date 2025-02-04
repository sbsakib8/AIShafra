import { createContext, useState } from 'react'
import getResponse from '../Gemini';
export const datacontext = createContext()
function UseContext({children}) {
 const [speaking, setspeaking] = useState()
 const [Listening, setListening] = useState('Listening...')
 const [res, setres]= useState(false)
    function speak(text){
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.lang = 'hi-GB';
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        window.speechSynthesis.speak(text_speak)
    }
    
   async function aiResponse(prompt){
      let text = await getResponse(prompt)
      setListening(text)
      speak(text)
      setres(true)
       setTimeout(()=>{
            setspeaking(false)
       },5000)
    }


    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
    const recognition = new speechRecognition()
    recognition.onresult=(e)=>{
        let currentIndex = e.resultIndex 
        let transcript = e.results[currentIndex][0].transcript

       setListening(transcript)
        aiResponse(transcript)
    }
    const value = {
        recognition,
        speaking,
        setspeaking,
        Listening,
        res,
        
        
    }
  return (
    <div>
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    </div>
  )
}

export default UseContext