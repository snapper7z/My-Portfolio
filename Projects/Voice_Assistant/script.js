let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";    // it is use for female voice
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

// let spk = speak("Hello This side Anas khan");
// console.log(spk);

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir, How's You Today")
    } else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir, How's You Today")
    } else{
        speak("Good Evening Sir, How's You Today")
    }
}
window.addEventListener("load",() =>{
    wishMe()
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
  let currentIndex = event.resultIndex
  let transcript = event.results[currentIndex][0].transcript
  content.innerText = transcript
//   console.log(event)
  takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none";
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello ") || message.includes("hey") || message.includes("hello denzy") ){
        speak("Hello Sir, How Can i help you")
    }
    else if(message.includes("Who are you")){
        speak("I am Denzy, Created by Anas Sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/", "_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/", "_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/", "_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram...")
        window.open("telegram://")
    }
    else if(message.includes("open notes")){
        speak("opening notes...")
        window.open("notes://")
    }
    else if(message.includes("open vscode")){
        speak("opening vscode...")
        window.open("vscode://")
    }
    else if(message.includes("time" || "timing")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText = "This is what i found on internet regarding" + message.replace("denzy", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}