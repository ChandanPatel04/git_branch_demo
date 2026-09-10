let arr = [11,20,13,5,9,99,6,14,30,74]
let min = arr[0];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);