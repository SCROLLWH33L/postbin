const dropArea = document.querySelector(".drag-area");
const button = document.querySelector("button");
const input = document.querySelector("input");

const states = {
    init: document.getElementById("init"),
    progress: document.getElementById("progress"),
    success: document.getElementById("success"),
    fail: document.getElementById("fail")
};

const changeActiveState = s => {
    for (const state in states) {
        if (state === s)
            states[state].classList.remove("hidden");
        else
            states[state].classList.add("hidden");
    }
}

const uploadFile = async file => {
    const url = '/';
    const formData = new FormData();
    formData.append('file', file)

    const fetchOptions = {
        method: 'POST',
        body: formData
    };

    return fetch(url, fetchOptions);
}

changeActiveState("init");

let file;

dropArea.onclick = () => {
    input.click();
};

input.addEventListener("change", async function() {
    file = this.files[0];
    changeActiveState("progress");

    response = await uploadFile(file);
    if (response.ok)
        changeActiveState("success");
    else
    changeActiveState("fail");
});

let counter = 0;

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
});

dropArea.addEventListener("dragenter", () => {
    counter++;
    dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", () => {
    counter--;
    if (counter === 0) {
        dropArea.classList.remove("active");
    }
});

dropArea.addEventListener("drop", async event => {
    event.preventDefault();
    dropArea.classList.remove("active");
    counter = 0;

    file = event.dataTransfer.files[0];
    changeActiveState("progress");

    response = await uploadFile(file);
    if (response.ok)
        changeActiveState("success");
    else
    changeActiveState("fail");
});
