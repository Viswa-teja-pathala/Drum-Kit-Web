var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    var body = document.body;

    activeButton.classList.add("pressed");

    body.className = body.className.replace(/(^|\s)bg-\S+/g, '');

    switch (currentKey) {
        case "w":
            body.classList.add("bg-crash");
            break;
        case "a":
            body.classList.add("bg-kick");
            break;
        case "s":
            body.classList.add("bg-snare");
            break;
        case "d":
            body.classList.add("bg-tom1");
            break;
        case "j":
            body.classList.add("bg-tom2");
            break;
        case "k":
            body.classList.add("bg-tom3");
            break;
        case "l":
            body.classList.add("bg-tom4");
            break;
    }

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 300);
}
