function shout(string) {
    return string.toUpperCase("Hello");
  };

function whisper(string) {
    return string.toLowerCase("Hello");
}
function logShout(string) {
    console.log(string.toUpperCase("Hello"));
}
function logWhisper(string) {
    console.log(string.toLowerCase("Hello"));
}


function sayHiToGrandma(string) {
    if (string === string.toLowerCase()){
        return "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if (string === "I love you, Grandma."){
        return "I love you, too."
    }
}