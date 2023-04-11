function runSpeechRecognition() {
  // get output div reference
  let output = document.getElementById("output");
  // get action element reference
  let action = document.getElementById("action");
  // new speech recognition object
  let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function() {

    recognition.start();

    action.innerHTML = "<small>listening, please speak...</small>";
  };

  recognition.onspeechend = function() {
    console.log("end")
    action.innerHTML = "<small>stopped listening, hope you are done...</small>";
    recognition.stop();
  }

  // This runs when the speech recognition service returns result
  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    let confidence = event.results[0][0].confidence;
    output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
    output.classList.remove("hide");
  };

  // start recognition
  recognition.start();
}