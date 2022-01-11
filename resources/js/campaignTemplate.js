let templateContent = `

    <style>
    
    
    </style>

    <label id='content'> + '${content}' + </label>
    <p> Speak 'start' to begin listen </p>
    <p> Speak 'repeat' to repeat the speech </p>
    <p> Speak 'positive' to answer positive </p>
    <p> Speak 'negative' to answer negative </p>
    <p> Speak 'neutral' to answer neutral </p>

    <input type='hidden' name='answer' id='answer'/>
    <button id="submit" type="submit">Submit</button> 

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>

        if('webkitSpeechRecognition' in window) {
            var speechRecognizer = new webkitSpeechRecognition();
            speechRecognizer.continuous = true;
            speechRecognizer.interimResults = true;
            speechRecognizer.lang = 'en-US';
            speechRecognizer.start();

            speechRecognizer.onresult = function(event) {
                var interimTranscripts = '';
                for(var i = event.resultIndex; i < event.results.length; i++){
                    var transcript = event.results[i][0].transcript;	
                    transcript = $.trim(transcript).toLowerCase();			
                    switch(transcript){
                        
                        case "repeat" : 
                        case "start" : 
                            var message = new SpeechSynthesisUtterance($("#content").text());
                            var voices = speechSynthesis.getVoices();
                            speechSynthesis.speak(message);
                            break;

                        case "positive" : 
                            $("#answer").val('positive');
                            $("#submit").click();
                            break;

                        case "negative" : 
                            $("#answer").val('negative');
                            $("#submit").click();
                            break;

                        case "neutral" : 
                            $("#answer").val('neutral');
                            $("#submit").click();
                            break;

                    }
                }
            };
            speechRecognizer.onerror = function (event) {};
        }
        else {
            alert("Your browser does not support this feature, please use latest Chrome browser");            
        }	

    </script>
             
`;