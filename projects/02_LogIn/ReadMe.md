# 📌 프로젝트명: Firebase Auth & React 로그인 데모

> 이 프로젝트는 [React] 수업에서 진행된 Small Project입니다.  
> Firebase 인증과 React를 활용한 기본 로그인 기능 구현을 목표로 하였습니다.

---

## 📆 프로젝트 기간

- 시작일: 2025.07.10
- 종료일: 2025.07.31

---

## 🎯 주요 목표

- ✅ Firebase Authentication 연동
- ✅ 이메일/비밀번호 기반 로그인 및 회원가입 구현
- ✅ 로그인 상태 관리 및 UI 반영
- ✅ 인증된 사용자만 접근 가능한 페이지 예시

---

## ⚙️ 사용 기술 스택

| 분류       | 기술명                                      |
| ---------- | ------------------------------------------- |
| 프론트엔드 | TypeScript, React                           |
| 백엔드     | Firebase Authentication, FireStore DataBase |
| 기타       | TailwindCSS                                 |

---

## 🧱 프로젝트 구조

```bash
📁 02_Login/
├── public/              # 정적 파일
└── src/
    ├── assets/          # 스크린샷 등 이미지 파일
    ├── components/      # 재사용 UI 컴포넌트 (Button, Input 등)
    ├── context/         # 전역 상태(인증) 관리를 위한 Context
    ├── firebase/        # Firebase 초기 설정 및 인스턴스
    ├── hooks/           # 커스텀 Hooks (useAuth, useUserData 등)
    ├── pages/           # 라우팅 단위 페이지 컴포넌트
    │   ├── auth/
    │   │   ├── Login.tsx
    │   │   └── Signup.tsx
    │   └── user/
    │       └── Profile.tsx
    ├── routes/          # 라우팅 설정 (PrivateRoute 포함)
    ├── styles/          # 전역 CSS 및 Tailwind 설정
    ├── App.tsx          # 메인 애플리케이션 컴포넌트
    └── index.tsx        # 애플리케이션 진입점
```

---

## 💡 주요 기능 설명

### ✨ 기능 1: 사용자 로그인/회원가입

- 이메일, 비밀번호 입력 폼 제공
- Firebase Auth로 회원가입 및 로그인 처리
- 에러 및 성공 메시지 UI 반영

### 🔐 기능 2: 인증 상태 관리

- 로그인/로그아웃 시 UI 동적 변경
- 인증된 사용자만 접근 가능한 페이지 예시 구현

### 🛡️ 기능 3: 보안 및 예외 처리

- 입력값 유효성 검사
- 인증 실패 시 에러 안내

---

## 🖼️ 데모 화면

| 주요 화면   | 캡처 예시                                   |
| ----------- | ------------------------------------------- |
| 로그인      | ![login](./src/assets/login_screen.png)     |
| 회원가입    | ![signup](./src/assets/signup_screen.png)   |
| 인증 페이지 | ![profile](./src/assets/profile_screen.png) |

---

## 🧠 회고 요약

- 어려웠던 점: 디렉토리 구조 설계와 이해
- 배운 점: FireStore Database 초기 세팅 및 에러 핸들링
- 개선하고 싶은 점: 소셜 로그인, UI 디자인 고도화

---

## 🙋‍♀️ 개발자

| 이름   | GitHub                                                 |
| ------ | ------------------------------------------------------ |
| 윤찬우 | [github.com/whobuythis](https://github.com/whobuythis) |
