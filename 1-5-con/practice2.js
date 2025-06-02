let firNum = prompt('첫번째 수는?')
let secNum = prompt('두번째 수는?')
let thirNum = prompt('새번째 수는?')

let min=firNum
if (secNum<min) {
    min = secNum;
}
else if (thirNum < min ) {
    min = thirNum
}
alert(`최소값: ${min}`)