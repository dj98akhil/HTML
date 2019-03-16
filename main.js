function increase() {
    document.getElementById("spanID").innerText++;
    //var num1 = document.getElementById("spanID").innerText;
    setColor();
}

function decrease() {
    document.getElementById("spanID").innerText--;
    //var num = document.getElementById("spanID").innerText;
    setColor();
}

function setColor() {
    var num = document.getElementById("spanID").innerText;

    var numID = document.getElementById("spanID");
    if (num === 0) {
        document.getElementById("spanID").style.color = "blue";
        numID.classList.replace(numID.classList.item(0), 'blue');

    } else if (num > 0) {
        numID.classList.replace(numID.classList.item(0), 'green');
    } else if (num < 0) {
        numID.classList.replace(numID.classList.item(0), 'red');
    }

}

function increaseWidth() {
    var width = document.getElementById("imgWidth").width + 5;
    var height = document.getElementById("imgWidth").height + 5;
    document.getElementById("imgWidth").style.width = width + "px";
    document.getElementById("imgWidth").style.height = height + "px";

}

function decreaseWidth() {
    var width = document.getElementById("imgWidth").width - 5;
    var height = document.getElementById("imgWidth").height - 5;
    document.getElementById("imgWidth").style.width = width + "px";
    document.getElementById("imgWidth").style.height = height + "px";

}

function increaseRadius() {

    document.getElementById("imgWidth").style.borderRadius = "50%";
}

function decreaseRadius() {


    document.getElementById("imgWidth").style.borderRadius = "0px";

}

function normalRadius() {
    document.getElementById("imgWidth").style.borderRadius = "20px";

}