let computerNum = 0; // 기본값 0
let playButton = document.getElementById("play-button"); // 버튼의 id값을 가져온다
let userInput = document.getElementById("user-input"); // 유저가 입력한 숫자값
let resultArea = document.getElementById("result-area");
let restButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 3; // 남은기회
let gameOver = false;
let history = []; // 유저가 입력한 숫자를 저장
let answerArea = document.querySelector(".answer_area");

// document.getElementById : id로 선택
// document.getElementsByClassName: class로 선택, 같은class가 여러개 있을 경우엔 모두 다 선택이 되서 배열에 저장된다
// document.querySelector : id, class둘다 선택이 가능하고 좀더 디테일한 선택이 가능하다 참고로 선택가능한 값이 여러개가 있을경우 그중에 첫번째 태그 하나만 반환한다
// document.querySelectorAll: 위에 document.querySelector와 같다 하지만 All에서 알수있듯이 선택된값 모두를 NodeList에 담아 반환한다

playButton.addEventListener("click", play);
restButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  // 랜덤뽑기
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
  answerArea.textContent = ` ${computerNum}`;
}

function play() {
  let userValue = userInput.value; // 입력한 값을 userValue 함수에 넣어줌

  if (userValue < 1 || userValue > 100) {
    // 유저가 입력한 값이 1보다 작거나 100보다 크면
    resultArea.textContent = "1부터 100사이 숫자를 입력";
    return;
  }

  if (history.includes(userValue)) {
    // 히스토리에 유저가 입력한 값이 포함되었다
    resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력하세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}`; // 시작을 눌렀을때 남은 기회

  if (userValue < computerNum) {
    resultArea.textContent = "up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
  } else {
    resultArea.textContent = "정답입니다";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
    resultArea.textContent = "GAME OVER";
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}
// 리셋
function reset() {
  // user input 창이 초기화되고
  userInput.value = "";
  // 새로운 번호가 생기고
  pickRandomNum();
  resultArea.textContent = "게임을 시작하지";
  gameOver = false;
  playButton.disabled = false;
  chances = 3;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;
  history = [];
}
pickRandomNum();
