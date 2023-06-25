let arr = [50, 20, 15, 65, 10, 5];
let container = document.querySelector('.Insertion');
let btn = document.querySelector('.bot');

for (let i = 0; i < arr.length; i++) {
    let innerdiv = document.createElement("div");
    innerdiv.style.height = arr[i] * 5 + "px";
    innerdiv.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16);
    innerdiv.setAttribute('id', 'elem' + i);
    innerdiv.classList.add("innerdev");
    container.appendChild(innerdiv);
}

btn.addEventListener("click", () => myFunction(arr)); // Attach the event listener to the button

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function myFunction(arr) {
    btn.disabled = true; // Disable the button during sorting
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            await sleep(200); // Delay to visualize the sorting process
            swapBarProperties(j + 1, j); // Pass the correct indices to swap
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    btn.disabled = false; // Re-enable the button after sorting
}

function swapBarProperties(j, k) {
    let a = 'elem' + j;
    let b = 'elem' + k;
    const bar1 = document.getElementById(a);
    const bar2 = document.getElementById(b);

    const tempHeight = bar1.style.height;
    const tempColor = bar1.style.backgroundColor;

    bar1.style.height = bar2.style.height;
    bar1.style.backgroundColor = bar2.style.backgroundColor;

    bar2.style.height = tempHeight;
    bar2.style.backgroundColor = tempColor;
}
