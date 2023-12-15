
window.onload = function() {
    document.getElementById("biggerBtn").onclick = function() {
        alertHelloWorld();
        makeBigger();
    };
    document.getElementById("mooBtn").onclick = moo;
};

function alertHelloWorld() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function moo() {
    var textInput = document.getElementById("textInput");
    textInput.value = textInput.value.toUpperCase();
    var sentences = textInput.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        // Check if the sentence has content
        if (sentences[i].trim().length > 0) {
            var words = sentences[i].trim().split(" ");
            // Add "-Moo" to the last word of each sentence
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textInput.value = sentences.join(". ");
}

