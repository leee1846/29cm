# 29cm front-end project

## 1. Version
#### library 및 version
```
npm : 8.11.0
node : 16.16.0
react : 18.2.0
react-router-dom : 6.4.3
react-query : 3.39.2
styled-components : 5.3.6
zustand : 4.1.4
```

## 2. Installation & Run
```
// 필요 dependency 설치
1. npm install

// run local server
2. npm run start 
```

## 3. Folder Structure
```
|src
|-- apis { productitems,coupons 데이터 제공 함수 }
|-- assets { fonts/image file }
|-- components
|-- constants
|-- datas { productitems,coupons object }
|-- pages 
|-- queries { react-query 함수}
|-- styles
|-- types
|-- utils
|-- zustand { 상태관리 라이브러리 files }

```

## 4. 필수 구현 사항

- [x]  **상품 목록 페이지** (route: `/products`)를 구현합니다
    - [x]  각 상품은 가격과 사진, 상품 제목을 표시합니다
    - [x]  상품의 score를 기준으로 내림차순으로 정렬하여 5개씩 보여주는 페이지네이션을 구현합니다
    - [x]  각 상품에는 장바구니 버튼이 있습니다
        - [x]  상품이 장바구니에 담겨 있지 않은 경우 - `담기` 버튼을 구현합니다
        - [x]  상품이 장바구니에 담겨 있는 경우 - `빼기` 버튼을 구현합니다
- [x]  **장바구니 페이지** (route: `/cart`)
    - [x]  장바구니에는 최대 3개의 상품이 담길 수 있습니다
    - [x]  장바구니의 상품 중 결제에 포함할 상품을 체크박스 등의 UI로 선택할 수 있습니다
    - [x]  장바구니에 담긴 각 상품의 수량을 조정할 수 있습니다
        - [x]  단, 최소 1개의 수량이 지정되어야 합니다
    - [x]  장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 쿠폰을 적용할 수 있습니다
        - [x]  상품 중에는 쿠폰 사용이 불가능한 상품(`availableCoupon == false`)이 존재합니다
            - [x]  이 상품들은 쿠폰 할인 계산에서 제외합니다
        - [x]  최종 결제 금액을 장바구니 페이지 하단에 보여주세요
            - [x]  소수점 가격이 생긴다면 버림 처리 합니다

## 5. 선택 구현 사항
- [x]  Typescript
- [ ]  Next.js
- [x]  Zustand
- [ ]  Emotion
- [x]  React Query
- [ ]  storybook
- [ ]  테스트