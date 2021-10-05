async function htmlScriptLoad(){
    var script = "";

    await fetch('resumehtml.html')
    .then(response => response.text())
    .then(text => script = text)

    return script;
}

async function cssScriptLoad(){
    var script = "";

    await fetch('css/generalStyles.css')
    .then(response => response.text())
    .then(text => script = text)

    return script;
}


async function sqlScriptLoad(){
    var script = "";

    await fetch('sqlScript.txt')
      .then(response => response.text())
      .then(text => script = text)
    return script;
}