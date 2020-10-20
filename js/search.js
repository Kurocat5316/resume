document.addEventListener('DOMContentLoaded',function(event){
    
        // array with texts to type in typewriter
        const searchText = "Emil Su";
    
        var sqlText = "";

        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function SearchBarWriter(sText, i, fnCallback) {
    
            // chekc if text isn't finished yet
            if (i < (sText.length)) {
    
            tmpHTML = sText.substring(0, i+1) +'';
            document.getElementById("searchBar").value = tmpHTML;
    
            setTimeout(function() {
                SearchBarWriter(sText, i + 1, fnCallback)
            }, 200);
    
            }
            else if (typeof fnCallback == 'function') {
            // call callback after timeout
                setTimeout(fnCallback, 700);
    
                document.getElementsByClassName("sqlCodePage")[0].classList.add('sqlCodePageExtend');;
    
                setTimeout(function() {
                    sqlWriter(sqlText, 0, fnCallback)
                }, 300);
                return;
            }
        }
    
    
        function sqlWriter(sqlCodeText, i, fnCallback){
            if (i < (sqlCodeText.length)) {
    
            tmpHTML = sqlCodeText.substring(0, i+1) +'';
            var textarea = document.getElementsByClassName("sqlCode")[0];
            textarea.value = tmpHTML;
            textarea.scrollTop = textarea.scrollHeight;
    
            setTimeout(function() {
                sqlWriter(sqlCodeText, i + 1, fnCallback)
            }, 10);
    
            }
            else if (typeof fnCallback == 'function') {
            // call callback after timeout
                setTimeout(fnCallback, 700);
    
                window.location.replace("resume.php");
                return;
            }
        }
        // start a typewriter animation for a text in the dataText array
        async function StartTextAnimation() {

            await sqlScriptLoad().then(function(response) {
                sqlText = new String(response);
                console.log("Success!", response);
              }, function(error) {
                sqlText = new String("Loading Failed");
                console.error("Failed!", error);
              })
    
            SearchBarWriter(searchText, 0, function(){
                });
        }
    
      
        // start the text animation
        StartTextAnimation();
    });