

function nars(num){
let arr = num.toString();
  let result =0
  for (let i =0; i< arr.length; i++){
     result += Math.pow(arr[i],arr.length);
  }

if(result == num){
  return true;
} else {
  return false;
}
}
console.log(nars(153));