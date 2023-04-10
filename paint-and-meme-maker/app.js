const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 40, 15, 100); // 왼팔
ctx.fillRect(195 - 40, 300 - 40, 30, 10); // 왼손
ctx.fillRect(350 - 40, 200 - 40, 15, 100); // 오른팔
ctx.fillRect(350 - 40, 300 - 40, 30, 10); // 오른손
ctx.fillRect(260 - 40, 200 - 40, 60, 200); // 몸통

ctx.arc(250, 100, 50, 0, 2 * Math.PI); // 머리
ctx.fill();

ctx.beginPath(); // 새로운 path
ctx.fillStyle = "#fff";
ctx.arc(260 + 10, 80, 8, 0, 2 * Math.PI); // 눈
ctx.arc(220 + 10, 80, 8, 0, 2 * Math.PI); // 눈
ctx.fill();

ctx.beginPath(); // 새로운 path
ctx.arc(250, 110, 20, 0, 1 * Math.PI); // 귀여운 입
ctx.fill();