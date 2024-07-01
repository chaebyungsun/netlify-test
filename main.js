let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let restButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 3;
let gameOver = false;

// document.getElementById : id로 선택
// document.getElementsByClassName: class로 선택, 같은class가 여러개 있을 경우엔 모두 다 선택이 되서 배열에 저장된다
// document.querySelector : id, class둘다 선택이 가능하고 좀더 디테일한 선택이 가능하다 참고로 선택가능한 값이 여러개가 있을경우 그중에 첫번째 태그 하나만 반환한다
// document.querySelectorAll: 위에 document.querySelector와 같다 하지만 All에서 알수있듯이 선택된값 모두를 NodeList에 담아 반환한다

playButton.addEventListener("click", play);
restButton.addEventListener("click", reset);

function pickRandomNum() {
  // 랜덤뽑기
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  chances--;
  console.log("chances", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
  } else {
    resultArea.textContent = "정답입니다";
  }

  chanceArea.textContent = `남은기회:${chances}`;

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // user input 창이 초기화되고
  userInput.value = "";
  // 새로운 번호가 생기고
  pickRandomNum();
  resultArea.textContent = "게임을 시작하지";
}
pickRandomNum();
