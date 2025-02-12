import { songs } from "./songs.js";
import { updateElements } from "./value_assigner.js";

const songList = Object.keys(songs);

let songIndex = localStorage.getItem("currSongIndex") === null ? 0 : parseInt(localStorage.getItem("currSongIndex"));
let score = localStorage.getItem("score") === null ? 1 : parseInt(localStorage.getItem("score"));

const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit");
const letterLink = document.getElementById("letter");

let currSong;
updateGame(songIndex);


function updateGame(index) {
    currSong = songs[songList[index]];

    updateElements(currSong.before, currSong.after)
}

function checkUserInput() {
    const value = userInput.value;

    if (currSong.isCorrect(value)) {
        submitBtn.classList.remove("disabled");
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.add("disabled");
        submitBtn.disabled = true;
    }
}

userInput.addEventListener('input', function () {
    checkUserInput();
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + 'px';
});

submitBtn.addEventListener("click", () => {
    
    songIndex === songList.length-1 ? songIndex = 0 : songIndex++;
    if (score === 5) {
        alert("Поздравляю! Ты открыла секрет");
        letterLink.classList.remove("disabled");
    } else {

        score++;
    }

    localStorage.setItem("currSongIndex", songIndex);    
    localStorage.setItem("score", score);    
    updateGame(songIndex);
});

