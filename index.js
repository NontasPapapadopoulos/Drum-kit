function playSound(key) {

    switch (key) {          // an audio file will play when we click a button analoga me to periexomeno tou koympiou
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}




$("button").on("click", function () {
    var buttonInnerHTML = this.innerHTML;           // the innerHTML gets the content of the buttom.

    playSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});


// detecting keyboard press

$(document).keydown(function (event) {

    playSound(event.key);

    buttonAnimation(event.key);
});


// Animations
function buttonAnimation(currentKye) {

    var activeButton = $("." + currentKye);

    activeButton.addClass("pressed");

    setTimeout(function () {
        activeButton.removeClass("pressed");
    }, 100);
}
