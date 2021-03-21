//pick an string element of any array.
function pickRandomString(anyArray) {
    return anyArray[Math.floor(Math.random() * anyArray.length)];
}
  
//takes an array of arrays with possible pieces to generate a coherent phrase, it uses a callback to the 1st defined function pickRandomString
function generateEntirePhrase() {
    //This is the array of arrays used as input in the program
    let piecesOfPhrase = [
        //the WHO
        ["The dog", "My grandma", "His turtle", "My bird"],
      
        //the ACTION
        ["ate", "peed", "crushed", "broke"],
      
        //the WHAT
        ["my homework", "the keys", "the car"],
      
        //the WHEN
        [
          "before the class",
          "right on time",
          "when I finished",
          "during my lunch",
          "while I was praying"
        ]
      
        /*the EXTRA: something I add to illustrate that all it's needed
        to elongate the structure of the phrase is to change the input (array of arrays)
        and NOT the actual code that executes the task. Just uncomment the line of code below to try.*/
        ,['and I started to cry &#128557', 'and I became really Angry &#129324', 'and I can\'t stop laughing &#128514', 'and I don\'t care at all &#128512']
    ];
    let entirePhraseArray = [];
  
    piecesOfPhrase.forEach(element => {
      entirePhraseArray.push(pickRandomString(element));
    });
  
    document.getElementById("excuse").innerHTML = entirePhraseArray.join(" ");
}


//Callback to function to change the html each time the page is loaded
window.onload = function() {
    generateEntirePhrase();
};

//Callback to function to change html each time the buttom is clicked
document.getElementById("generate").onclick = function() {generateEntirePhrase()};