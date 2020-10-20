async function htmlScriptLoad(){
    var script = "";
    await $.ajax({
        url: "./controller/resumeLoad.php",
        success: function (data) {
            script = data;
            
        },
        error: function(xhr) {
            return "fail";
        }
      });

      return script;
}


async function cssScriptLoad(){
    var script = "";
    await $.ajax({
        url: "./controller/resumeCSSLoad.php",
        success: function (data) {
            script = data;
            
        },
        error: function(xhr) {
            return "fail";
        }
      });

      return script;
}


async function sqlScriptLoad(){
    var script = "";
    await $.ajax({
        url: "./controller/searchSQLLoad.php",
        success: function (data) {
            script = data;
            
        },
        error: function(xhr) {
            return "fail";
        }
      });
    return script;
}