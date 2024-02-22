var bt = document.querySelectorAll("button");

//Adding Event Listener to each button

for (var i = 0; i < bt.length; i++) 
{
    bt[i].addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;
        playSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
}

// Adding a event listener for key press on the keyboard

document.addEventListener("keydown", function (e) {
    playSound(e.key);
    btnAnimation(e.key);
})

//To play different sounds corresponding to different buttons and/or keys pressed

function playSound(input) {
    switch (input) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        default:
            console.log(this);
    }
}

// To add animation whhenever a button is clicked or a key is pressed

function btnAnimation(input)
{
    var currButton=document.querySelector("."+input);
    currButton.classList.add("pressed");
    setTimeout(function(){
        currButton.classList.remove("pressed")
    },200);
}