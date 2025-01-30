# 유투브 클론 코딩

## 개요

웹 개발 기초를 다지기 위해서 배운 내용을 기록하는 레포지토리

## 기술

### babel

**설치**

```bash
npm install --save-dev @babel/core @babel/preset-env
```

`babel.config.json` 파일 작성

```json
{
  "presets": ["@babel/preset-env"]
}
```

**실행**

`package.json`의 스크립트 변경

```json
"scripts":{
    "dev":"babel-node index.js"
}
```

### nodemon

**설치**

```bash
npm install --save-dev nodemon
```

**사용**

`package.json` 스크립트에 추가

```json
"scripts": {
    "dev": "nodemon -exec babel-node index.js"
}

```

실행 명령어

```bash
npm run dev
```

### express

**설치**

```bash
npm install express
```

**기본 구성**

```js
const express = require("express"); // Express 모듈 가져오기
const app = express(); // Express 애플리케이션 생성

const handleListening = () => console.log("Server listening on port 4000🚀");
app.listen(4000, handleListening); // 서버 실행
```

app.listen(4000)은 4000번 포트에서 서버를 실행합니다.

**HTTP 응답**

```js
app.get("/", (req, res) => {
  res.send("<h1>Hello, World! 🌎</h1>");
});
```

- req: 클라이언트가 보낸 요청 정보를 담은 객체
- res: 서버가 클라이언트에게 보낼 응답 정보를 담은 객체
- res.send(): 클라이언트에게 데이터를 전송하는 메서드, HTML, 문자열, JSON 등 다양한 형식을 보낼 수 있다.
- res.end(): 응답을 종료하는 메서드. 추가 데이터를 보내지 않고 응답을 종료할 때 사용합니다.

**라우팅**

- 주체를 중심으로 도메인을 나누는 것이 좋음
- `const router = express.Router()` 로 선언하고, `router.get("/route", () => )` 로 경로 설정
- `routers` 폴더에 `globalRouter.js` 등을 생성해 코드 정리
- `export default` 또는 `export const` 사용해 모듈화
- 객체의 생성, 조회, 수정, 삭제(CRUD)를 기준으로 라우트 설계
- `:id` 보다 `/upload` 같은 고정된 경로를 먼저 둠
- `regexpal.com`에서 정규식 테스트 가능

### morgan

**설치**

```bash
npm install morgan
```

**사용**

```js
const morgan = require("morgan");
app.use(morgan("dev")); // 'dev', 'combined' 등 다양한 로깅 형식 지원
```

### pug

**설치**

```bash
npm install pug
```

```js
app.set("view engine", "pug"); // Express에 뷰 엔진 설정
app.set("views", precess.cwd() + "/src/views"); // views 폴더 지정
```

**pug 문법**

- 태그는 소문자로 작성, 속성은 괄호 안에 입력
- `include` 로 `partial` 파일 불러오기
- `#{}`로 JS 변수 포함 가능

**템플릿 상속**

- `extends` 로 부모 템플릿 사용
- `block` 으로 변경할 부분 지정
- 여러개의 `block` 을 만들 수 있음

**컨트롤러와 연동**

- `res.render("template", {key: value})` 로 변수 전달

**반복문 & 조건문**

- `if` 사용 가능
- `each element in array` 로 `for` 작성
- `else` 로 빈 배열 처리 가능

**Mixin 사용**

- 재사용 가능한 블록 생성
- `include mixins/video` 로 불러오기
- `+video(argument)` 로 사용
- `mixin video(argument)` 로 정의
- 다른 템플릿에서도 재사용 가능

**스타일링**

- MVP CSS 활용 가능

## 설치

1. 레포지토리 클론

```bash
git clone https://github.com/AlpacaMale/wetube.git
```

2. 프로젝트 디렉토리로 이동

```bash
cd wetube
```

3. npm 패키지 설치

```bash
npm install
```

4. 스크립트 실행

```bash
npm run dev
```
