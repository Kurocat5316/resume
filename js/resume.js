document.addEventListener('DOMContentLoaded',function(event){
    
        // array with texts to type in typewriter
        var htmlText = "";
        var cssText = "";

        
    
        var tmpHTML = "";
        var tmpCSS = "";
    
        var flag = true;
        var usedHTML = "";
        var usedCSS = "";
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(hText, cText, length, i, fnCallback) {
            
    
            // chekc if text isn't finished yet
            if (i < (hText.length)) {
    
            tmpHTML = hText.substring(0, i+1) +'';
            var htmlTextArea = document.getElementsByClassName("htmlCode")[0];
            htmlTextArea.value = tmpHTML;
            htmlTextArea.scrollTop = htmlTextArea.scrollHeight;
    
            if(tmpHTML[tmpHTML.length -1] == "<"){
                flag = true;
            }
    
            if(tmpHTML[tmpHTML.length -1] == ">"){
                flag = false;
            }
    
            if(flag == false)
                usedHTML = tmpHTML;
    
            }
    
            if (i < (cText.length)) {
    
            tmpCSS = cText.substring(0, i+1) +'';
            var cssTextArea = document.getElementsByClassName("cssCode")[0];
            cssTextArea.value = tmpCSS;
            cssTextArea.scrollTop = cssTextArea.scrollHeight;
            }
    
            if(tmpCSS.length > 0){
            var endTest = tmpCSS[tmpCSS.length -1];
            if(endTest.includes("}"))
                usedCSS = tmpCSS;

            }
            var total = usedHTML + "<style>" + usedCSS +"</style>";
    
            document.getElementsByClassName("page")[0].innerHTML = total;
            
            if(i < (hText.length) || i < (cText.length)){
                setTimeout(function() {
                typeWriter(hText, cText, length, i + 1, fnCallback)
            }, 10);
            }
            else if (typeof fnCallback == 'function') {
            // call callback after timeout
                setTimeout(fnCallback, 500);
                return;
            }
    
            
        }


        // start a typewriter animation for a text in the dataText array
        async function StartTextAnimation() {
            //dataText.val().replace("/\n/g", "&#13;&#10");
            await htmlScriptLoad().then(function(response) {
                htmlText = response;
              }, function(error) {
                htmlText = "Loading Failed";
                console.error("Failed!", error);
              })

            await cssScriptLoad().then(function(response) {
                cssText = response;
              }, function(error) {
                cssText = "Loading Failed";
                console.error("Failed!", error);
              })


            if(htmlText.length > cssText.length)
                // text exists! start typewriter animation
                typeWriter(htmlText, cssText, htmlText.length, 0, function(){
                });
            else
                typeWriter(htmlText, cssText, cssText.length, 0, function(){
                });
        }

        function ScriptDataLoad(){
            
        }
    

        // start the text animation
        StartTextAnimation();
    });