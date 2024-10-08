let buttonLength = document.querySelectorAll('.drum').length;
console.log(buttonLength);

for (let i = 0; i < buttonLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

document.addEventListener('keypress', function (e) {
    let keyInnerHtml = e.key;
    makeSound(keyInnerHtml);
    buttonAnimation(keyInnerHtml);

})

// document.querySelectorAll('.drum').forEach(button => {
//     button.addEventListener('touchstart', () => {
//       let buttonInnerHtml = button.innerHTML;
//       makeSound(buttonInnerHtml);
//       console.log("sound...");
//       buttonAnimation(buttonInnerHtml);
//         console.log("Animation..");
        
//     });
//   });
  

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(event) {

    let activeButton = document.querySelector("." + event).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("." + event).classList.remove("pressed");
    },200);
   
}