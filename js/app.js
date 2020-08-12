var thisArray = [1,2,3,4,5];
var sum = 0;
function aFunction(anArray) {
    for (var i = 0; i < anArray.length; i++) {
    sum += anArray[i]}
    return sum
}
console.log(aFunction(thisArray));






var arr = [1, 2, 3, 4];

function mathMax(arr){
var max = Math.max(...arr);
return max

}
console.log(mathMax(arr))


