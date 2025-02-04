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
      let newText = text.split('**')&&text.split('*')&&text.replace('google','sb sakib sarkar he is living in bangladesh at gazipur ')&&text.replace('Google','sb sakib sarkar he is living in bangladesh at gazipur ') 
      setListening(newText)
      speak(newText)
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
       takecommand(transcript.toLowerCase())
    }


    // open the recognition
    function takecommand(command){
        if(command.includes('open')&&command.includes('youtube')){
            window.open('https://www.youtube.com/','_blank')
            speak('opening youtube...')
            setListening('opening youtube...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }else if(command.includes('open')&&command.includes('google')){
            window.open('https://www.google.com/','_blank')
            speak('opening google...')
            setListening('opening google...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }else if(command.includes('open')&&command.includes('facebook')){
            window.open('https://www.facebook.com/','_blank')
            speak('opening facebook...')
            setListening('opening facebook...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }else if(command.includes('open')&&command.includes('linkedin')){
            window.open('https://www.linkedin.com/','_blank')
            speak('opening linkedin...')
            setListening('opening linkedin...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }else if(command.includes('open')&&command.includes('instagram')){
            window.open('https://www.instagram.com/','_blank')
            speak('opening instagram...')
            setListening('opening instagram...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }else if(command.includes('open')&&command.includes('messenger')){
            window.open('https://www.messenger.com/','_blank')
            speak('opening messenger...')
            setListening('opening messenger...')
            setTimeout(()=>{
                setspeaking(false)
           },5000)
        }
        else{
            aiResponse(command)
        }
    }
    const value = {
        recognition,
        speaking,
        setspeaking,
        Listening,
        setListening,
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