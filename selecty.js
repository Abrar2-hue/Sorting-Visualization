let arr = [20, 40, 10, 32, 42, 50, 60];
let Selecty = document.querySelector('.Selection');
let btn = document.querySelector('.bot');

// Initialize the visualization of bars
for (let i = 0; i < arr.length; i++) {
  let innerdev = document.createElement("div");
  innerdev.style.height = arr[i] * 5 + "px";
  innerdev.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
  innerdev.setAttribute('id', 'elem' + i);
  innerdev.classList.add("innerdev");
  Selecty.appendChild(innerdev);
}
btn.addEventListener("click",()=> myfunction(arr));
const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}
async function myfunction(arr) {
 for (let i = 0 ; i < arr.length; i++){
  let min_index = i;
  for (let j = i+1 ; j <= arr.length ; j++){
    if (arr[j]<arr[min_index]){
      min_index = j;
    }
  }
  swapBarProperties(i,min_index);
  temp = arr[i];
  arr[i] = arr[min_index];
  arr[min_index] = temp;
  await sleep(500);
 }
}
function swapBarProperties(i, j) {
  let a = 'elem' + i;
  let b = 'elem' + j;
  const bar1 = document.getElementById(a);
  const bar2 = document.getElementById(b);

  const tempHeight = bar1.style.height;
  const tempColor = bar1.style.backgroundColor;

  bar1.style.height = bar2.style.height;
  bar1.style.backgroundColor = bar2.style.backgroundColor;

  bar2.style.height = tempHeight;
  bar2.style.backgroundColor = tempColor;
}
