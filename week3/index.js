var numberOfFaces = 2

var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

var theBody = document.getElementsByTagName("body")[0];


function deleteAllSmileys(theSmileys) {
    while (theSmileys.firstChild) theSmileys.removeChild(theSmileys.firstChild)
}


function generateFaces() {
    for (i = 1; i <= numberOfFaces; i++) {
        var randomTop = Math.floor(Math.random() * 400)
        var randomLeft = Math.floor(Math.random() * 400)
        var thisSmiley = document.createElement("img")

        thisSmiley.src = "smile.png"
        thisSmiley.style.top = randomTop + "px"
        thisSmiley.style.left = randomLeft + "px"
        theLeftSide.appendChild(thisSmiley)
    }


    
    var leftSideImages = theLeftSide.cloneNode(true)

    leftSideImages.removeChild(leftSideImages.lastChild)
    theRightSide.appendChild(leftSideImages)

    theLeftSide.lastChild.onclick =
        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 2;
            //delete all smileys while true
            deleteAllSmileys(theLeftSide)
            deleteAllSmileys(theRightSide)
            //generate new faces
            generateFaces();
        };
    theBody.onclick = function gameOver() {
        alert("Game Over!")
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    }
}