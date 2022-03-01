const reconocervoz = ()=>{
    const rec = new webkitSpeechRecognition();
    rec.interimResults = true;
    rec.continuous = true;
    rec.lang = "es-ES";
    rec.addEventListener("result",e=>{
        let texto = e.results[0][0].transcript;
        document.querySelector(".texto-resultante").textContent = texto;
        if (texto.toUpperCase().includes("ABRIR YOUTUBE")) {
            window.open("https://youtube.com");           
            let utterance = new SpeechSynthesisUtterance("Abriendo youtube");
            speechSynthesis.speak(utterance);
        }
            
    })
    rec.start();
}
document.getElementById("start_recognition").addEventListener("click",reconocervoz);
