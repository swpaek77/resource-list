# Resoure List Project

## 개요

- 리소스 관리를 위한 프로젝트

## 목적

- URL, 이미지등의 리소스를 웹사이트 내에서 쉽게 관리하기 위함

## 프로젝트 상세 내용

- Vite 로 개발 환경 구성
- React, TypeScript 기반으로 개발
- Zustand 로 Global 상태관리
- React Toastify 라이브러리로 토스트 메시지 설정
- Typed Design System 으로 icon 사용
  - 해당 라이브러리가 @emotion/core 에 종속되어 있기에 css in js 는 emotion 을 사용
  - tailwindcss 설치는 했지만, reset css 용도로만 사용
- Immer + Zustand 를 활용한 불변성 관리
- Zustand shallow 활용하여 렌더링 최적화
- Zustand Persist 활용하여 localStorage 저장 자동화

## 데모 배포

- https://resource-list.vercel.app 에서 확인 가능함
