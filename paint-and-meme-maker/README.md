# Painting & Meme maker
## Info
바닐라 JS를 이용하여 그림판과 밈 메이커를 만들어봅시다!

## Study
### 1.0 The Power of Canvas
#### canvas란 무엇일까?
- canvas API는 우리가 Javascript로 그래픽을 그릴 수 있게 해주는 API.
- 3D 그래픽을 생각한다면 WebGL API가 매우 cool.
- 2D 그래픽에서는 canvas가 cool.

### 1.1 Our First Drawing
#### context?
- canvas에 그림을 그리기 위한 붓이라고 생각하면 된다.
```jsx
const ctx = canvas.getContext("2d") // 2d면 "2d" 3d는 "webgl" / "bitmaprenderer"
```

#### size
- canvas의 크기 값은 css 에서만 설정해 주는 것이 아니라, javascript에도 명시를 해주어야한다.
```jsx
canvas.width = 800;
canvas.height = 800;
```
- 선들을 그리기 시작할때, width와 height의 수정은 javascript에서만 진행한다.
  - 이유는? canvas에서 이미지의 퀄리티를 높이기 위해서이다.

#### canvas의 좌표 시스템
- left:0, top:0 이 좌표 (0, 0)

#### `fillRect()` 함수
- `fillRect()` 함수는 함수 이름처럼 사각형을 채우는 함수이다.
  - `fillRect(x, y, 너비, 높이)`

### 1.2 Paths
#### fill / stroke
- 사용했던 `fillRect()` 함수는 단축 함수이다. (위치를 그리고 바로 채워넣음)
- 먼저 위치를 그리고, 선으로 사용할 것인지 채울 것인지 다음과 같이 사용할 수도 있다.
```jsx
// 선만 그릴 경우
ctx.rect(50, 50, 100, 200);
ctx.stroke()

// 채우기로 사용할 경우
ctx.rect(50, 50, 100, 200);
ctx.fill()
```

- 여러개가 있어도 마찬가지이다.
```jsx
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.stroke()
```
- 주의할 점은 `fill()` / `stroke()` 설정 이후에 오는 `rect()`는 다시 적용을 해주어야 한다는 점이다. 

#### path
- 다음의 경우에서 예상되는 값은 맨 마지막의 요소만 빨간색으로 `fill()`이 적용될 것을 예상할 수 있다.
- 왜냐하면 앞선 `fill()` 이후에 오는 값은 다시 `fill()`을 적용해주어야만 채워지기 때문이다.
```jsx
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
```
- 하지만 결과 값은 전부 빨간색으로 채워지게 된다.
- 이는 나머지의 `rect(...)`와 새로 설정해준 `rect(350, 350, 100, 100)`이 전부 동일한 path 값을 갖고 있기 때문이다.
- 다음처럼 수정하면 우리가 예상한 값을 가질 수 있다.
```jsx
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); // 새 경로 생성
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
```
- `beginPath()` 함수를 이용하게되면, 이전의 그림들의 path와 다른 새로운 path 값을 생성해주게된다.
- 이전 경로와는 완전 단절, 새로운 경로가 생성되는 것이다.

### 1.3 moveTo and lineTo
#### rect()
- `rect()` 함수도 사실 shortcut function 이었다.
- 그렇다면 `rect()`를 사용하지 않고 직접 작성하려면 어떻게 하면 될까?

#### moveTo() / lineTo()
- `moveTo()`는 시작 지점을 이동해주는 함수
  - `moveTo(x, y)`
  - 연필의 위치를 옮김
- `lineTo()`는 선을 그리면서 이동해주는 함수
  - `lineTo(x, y)`
  - 연필로 그림을 그림
- x, y 좌표가 50, 50 떨어진 지점에서 정사각형을 그리고 싶다면?
```jsx
  ctx.moveTo(50, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(150, 150);
  ctx.lineTo(50, 150);
  ctx.lineTo(50, 50)
  ctx.stroke(); // 채우고 싶다면 fill()
```

### 1.4 Drawing Project One
- 지금까지 배운 걸로 집을 한번 그려보자

#### lineWidth
- 선 굵기를 조절하려면 `lineWidht`를 사용하면 된다.
- 이 때 주의할 점은 `lineWidth` 가 적용될 그림의 이전에 선언되어야 한다는 것이다.
```jsx
// X
ctx.strokeRect(300, 300, 50, 100);
ctx.lineWidth = 20; 

// O
ctx.lineWidth = 20; 
ctx.strokeRect(300, 300, 50, 100); 
```

#### house
- 만들어본 house
```jsx
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
```
![house](./image/house.PNG)

## reference
[바닐라 JS로 그림 앱 만들기 2022](https://nomadcoders.co/javascript-for-beginners-2)
