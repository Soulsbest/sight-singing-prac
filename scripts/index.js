let max = 7
let num = 1
let avoidRepetition = True

updateMax(max)
updateNum(num)

function updateMax(newMax) {
  max = newMax
  document.getElementById('max').textContent = max
}

function updateNum(newNum) {    
  num = newNum
  document.getElementById('num').textContent = num
}

function handlePlus() {
    updateMax(max+1)
}

function handleMinus() {
    if (max > 1) {
      updateMax(max-1)
    }
}

function handleNext() {

    if (max == 1) return 1;

    let nexNum = -1
    while (nexNum == -1 || nexNum == num) {
        nexNum = Math.floor(Math.random() * max) + 1
    }
    updateNum(nexNum)
}