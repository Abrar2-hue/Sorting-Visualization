let arr = [20, 40, 10, 32, 42, 50, 60];
let Quick = document.querySelector('.Quick');
let btn = document.querySelector('.bot');

// Initialize the visualization of bars
for (let i = 0; i < arr.length; i++) {
  let innerdev = document.createElement("div");
  innerdev.style.height = arr[i] * 5 + "px";
  innerdev.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
  innerdev.setAttribute('id', 'elem' + i);
  innerdev.classList.add("innerdev");
  Quick.appendChild(innerdev);
}

btn.addEventListener("click", () => {
  // Make a copy of the original array to preserve it
  let sortedArr = [...arr];
  myFunction(sortedArr, 0, sortedArr.length - 1);
});

async function myFunction(arr, start, end) {
   quickSort(arr, start, end);
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivotIndex = await partition(arr, start, end);
   quickSort(arr, start, pivotIndex - 1);
   quickSort(arr, pivotIndex + 1, end);
}

async function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
       swap(arr, i, j);
       swapBarProperties(i, j);
    }
  }

   swap(arr, i + 1, end);
   swapBarProperties(i + 1, end);

  return i + 1;
}

async function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function swapBarProperties(i, j) {
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

  // Swap the IDs of the bars
  bar1.setAttribute('id', b);
  bar2.setAttribute('id', a);
}
