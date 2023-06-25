let arr = [50, 20, 15, 65, 10, 5];
let bubble = document.querySelector('.Bubble');
let btn = document.querySelector('.bot');

for (let i = 0; i < arr.length; i++) {
    let innerdev = document.createElement("div");
    innerdev.style.height = arr[i] * 5 + "px";
    innerdev.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
    innerdev.setAttribute('id', 'elem' + i);
    innerdev.classList.add("innerdev");
    bubble.appendChild(innerdev);
}

btn.addEventListener("click", () => myfunction(arr)); // Attach the event listener to the button

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function myfunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(800);
            if (arr[j] > arr[j + 1]) { // Corrected the comparison for descending order
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapBarProperties(j);
            }
        }
    }
}

function swapBarProperties(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    const bar1 = document.getElementById(a);
    const bar2 = document.getElementById(b);

    const tempHeight = bar1.style.height;
    const tempColor = bar1.style.backgroundColor;

    bar1.style.height = bar2.style.height;
    bar1.style.backgroundColor = bar2.style.backgroundColor;

    bar2.style.height = tempHeight;
    bar2.style.backgroundColor = tempColor;
}
