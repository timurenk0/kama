const beforeText = document.getElementById("before");
const userInput = document.getElementById("user-input");
const afterText = document.getElementById("after");
const submitBtn = document.getElementById("submit");
const letterLink = document.getElementById("letter");

export function updateElements(before, after) {
    beforeText.innerText = before;
    afterText.innerText = after;

    userInput.value = "";

    submitBtn.classList.add("disabled");
    submitBtn.disabled = true;
}