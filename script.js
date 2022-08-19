input = document.getElementById("answer")

function number() {
    var num = document.getElementById("myInput").value
    if ((num%3 === 0) && (num%5 === 0)) {
        input.textContent = "fizzbuzz"
    } else if (num%3 === 0) {
        input.textContent = "buzz"
    } else if (num%5 === 0) {
        input.textContent = "fizz"
    }
    else {
        input.textContent = num
    }
}