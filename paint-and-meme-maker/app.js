const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
]  ;

function onClick(event){
  ctx.beginPath(); // 새 선을 그릴 때 마다 새로운 컬러를 주기 위해서 새로운 path 생성
  ctx.moveTo(0, 0); // 최상단 맨 왼쪽
  const color = colors[Math.floor(Math.random() * colors.length)]; // color 배열에서 랜덤 컬러 값 가져오기
  ctx.strokeStyle = color; // 해당 배열에서 가져온 값 적용
  ctx.lineTo(event.offsetX, event.offsetY); // 해당 클릭 지점의 x, y 좌표
  ctx.stroke(); // 선 그려주기
}

canvas.addEventListener("mousemove", onClick);