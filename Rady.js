let arr = [50, 20, 15, 65, 10, 5];
let Radi = document.querySelector('.Radix');
let btn = document.querySelector('.bot');

for (let i = 0; i < arr.length; i++) {
  let innerdev = document.createElement("div");
  innerdev.style.height = arr[i] * 5 + "px";
  innerdev.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
  innerdev.setAttribute('id', 'elem' + i);
  innerdev.classList.add("innerdev");
  Radi.appendChild(innerdev);
}

btn.addEventListener("click", () => {
  btn.disabled = true; // Disable the button during sorting
  radixSort(arr)
    .then(() => {
      btn.disabled = false; // Enable the button after sorting
    });
});

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

function getDigit(num, pos) {
  return Math.floor(num / pos) % 10;
}

function getMaxDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    let digits = Math.floor(Math.log10(arr[i])) + 1;
    if (digits > maxDigits) {
      maxDigits = digits;
    }
  }
  return maxDigits;
}

async function radixSort(arr) {
  let maxDigits = getMaxDigits(arr);
  let tempArr = new Array(arr.length);
  let count = new Array(10).fill(0);

  let pos = 1;
  for (let i = 0; i < maxDigits; i++) {
    // Counting sort based on current digit
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], pos);
      count[digit]++;
    }

    for (let j = 1; j < 10; j++) {
      count[j] += count[j - 1];
    }

    for (let j = arr.length - 1; j >= 0; j--) {
      let digit = getDigit(arr[j], pos);
      tempArr[count[digit] - 1] = arr[j];
      count[digit]--;
    }

    for (let j = 0; j < arr.length; j++) {
      arr[j] = tempArr[j];
    }

    await visualizeSorting(arr, pos); // Visualize the sorting

    pos *= 10;
    count.fill(0);
  }
}

async function visualizeSorting(arr, pos) {
  for (let j = 0; j < arr.length; j++) {
    await sleep(50); // Delay for visualization
    swapBarProperties(j, arr[j] * 5);
  }
}

function swapBarProperties(j, height) {
  let elementId = 'elem' + j;
  const bar = document.getElementById(elementId);
  bar.style.height = height + "px";
}
