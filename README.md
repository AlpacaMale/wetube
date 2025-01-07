# 유투브 클론 코딩

이 레포지토리는 노마더코더 강의를 들으며 클론 코딩을 구현한 내용을 기록하기 위한 레포지토리 입니다.

## 개요

- 플랫폼: 노마드 코더
- 목적: 웹 개발 기초를 다지기 위해서
- 사용된 기술: express, nodemon, babel, morgan

## 설치

1. 레포지토리 클론론

```bash
git clone https://github.com/AlpacaMale/wetube.git
```

2. 프로젝트 디렉토리로 이동

```bash
cd wetube
```

3. npm 패키지 설치

```bash
npm i
```

## 라우팅

### globalRouter

/ -> Home
/join -> Join
/login -> Login
/search -> Search

### userRouter

/users/join
/users/login
/users/edit -> Edit user
/users/delete -> Delete user

### videoRouter

/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comments -> Comment on a video
/vidoes/comments/delete -> Delete A Comment of a Video
