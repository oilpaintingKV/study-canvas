const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
  if(isPainting){ // 만약 그림을 그리기 시작(mousedown) 했다면?
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY); // 유저 마우스가 캔버스 내에 있는 위치로 움직이기
}
function startPainting(){ // 마우스를 누를 때 함수
  isPainting = true;
}
function cancelPainting(){ // 마우스를 뗄 때 함수
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting); // 마우스를 누르고 있는 상태
canvas.addEventListener("mouseup", cancelPainting); // 마우스를 뗀 상태
canvas.addEventListener("mouseleave", cancelPainting); // canvas 바깥으로 마우스가 나갔을 때, cancelPainting() 호출
