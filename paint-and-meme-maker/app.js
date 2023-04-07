const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 2, 200); // 왼쪽 벽
ctx.fillRect(600, 200, 2, 200); // 오른쪽 벽
ctx.lineWidth = 2; // 선 굵기 조절
ctx.moveTo(202, 250); // 벽 장식 1 선 그릴 위치로 이동
ctx.lineTo(602, 250); // 벽 장식 1
ctx.moveTo(202, 270); // 벽 장식 2 선 그릴 위치로 이동
ctx.lineTo(602, 270); // 벽 장식 2
ctx.fillRect(350, 300, 100, 100); // 문
ctx.fillRect(200, 200, 402, 2); // 천장
ctx.moveTo(200, 200); // 지붕 그릴 위치로 이동
ctx.lineTo(405, 100); // 왼쪽 지붕
ctx.lineTo(602, 200); // 오른쪽 지붕
ctx.stroke() // 선 채우기