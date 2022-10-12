# VanillaJS-todolist


## 프로그래머스

https://school.programmers.co.kr/learn/courses/14723﻿

수업에서 진행한 순수 VanillaJS 스터디 과제 

2주차 - 기본 Todoapp + 로컬스토리지 만들기

4주차 - 진화한 Todoapp 만들기 + API 비동기 통신




## 사이트 방문하기

https://zerosial.github.io/VanillaJS-todolist/




## 작동 예시 (2주차)

![chrome_x63OessYO6](https://user-images.githubusercontent.com/97251710/192990763-7574123d-0866-4004-b62c-80bffd121a83.gif)




## 작업 목록 (2주차)

### 필수 구현사항

- [x] TodoList함수를 TodoList.js라는 이름의 스크립트로 분리
- [x] new TodoList() 를 실행했던 코드 구문은 index.js 라는 이름의 스크립트로 분리한다.
- [x] TodoInput.js로  입력 버튼을 만들어서 버튼 클릭 시 추가되게 수정
- [x] 할 일 텍스트 뒤에 버튼을 하나 추가합니다. 해당 버튼을 클릭하여 할 일이 삭제되게 만듭니다.
- [x] 할 일 텍스트를 클릭하면 해당 Todo의 isCompleted 값을 true로 만듭니다.
- [x]  완료 항목은 사선처리

### 보너스 구현사항 - input 컴포넌트화 하기

- [x] TodoInput.js로 할 일을 추가하는 부분을 컴포넌트화

### 보너스 구현 사항 - TodoCount 컴포넌트

- [x] TodoCount 컴포넌트화
- [x] 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시

### 보너스 구현사항 - Event delegate

- [x] Event delegate 기법을 이용

### 보너스 구현 사항 - 커스텀 이벤트

- [x] 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다

### 보너스 구현사항 - localStorage

- [x] localStorage를 활용해 todo data가 변경될 때마다 localStorage에 저장하게 합시다.

### 추가 구현사항

- [x] Tailwindcss로 기본 디자인 수정
- [x] reRender 이벤트 전파로 렌더링 시점 파악하여 setState




## 작동예시 (4주차)

### 기본 데이터 (brian)에서의 추가 , 삭제 , 클리어 , 각 완료 / 미완료간의 이동
![chrome_tH5eBhczPg](https://user-images.githubusercontent.com/97251710/195395645-f4ab6ff2-9e4a-4abd-bb36-69cd44a573dc.gif)

### 우측 리스트를 통해 다른 사람의 데이터를 가져와 수정가능
![chrome_JDtYLScAhc](https://user-images.githubusercontent.com/97251710/195395886-5f8ff992-a391-4b8c-a03f-4346489dabb9.gif)

### 하단 좌 우 화살표를 통해 전체 리스트 조회가능 및 검색창으로 유저이름 직접입력 가능
![chrome_EEuE6GWk2e](https://user-images.githubusercontent.com/97251710/195395983-b469c37c-a969-4595-aa62-69d6c7694bdc.gif)

### Favorite 기능 추가 (로컬 스토리지)를 이용하여 언제던지 전체목록 혹은 좋아요 목록 조회가능
![chrome_Ue23iepaUz](https://user-images.githubusercontent.com/97251710/195396076-4649d167-c778-4115-b70b-f758de7a40a5.gif)




## 작업 목록 (4주차)

### 필수 구현사항
- [x] 각각의 API 연결하기
- [x] 각 API의 비동기 통신을 컴포넌트로 연결하여 구현하기

###  Users 컴포넌트
- [x]  Users 컴포넌트를 만들어서 사용자 목록 노출
- [x]  특정 사용자를 클릭하여 그 사용자의 todos 리스트 노출
- [x]  현재 뿌려진 todos가 누구의 todos인지 표시

### API가 느린 경우의 인터랙션 처리
- [x] 로딩 중임을 사용자에게 알리는 처리 및 오작동하지 않게 하는 각종 처리를 고안
- [x] Skeleton UI 를 사용하여 사용자의 이탈 막기

### 미니 트렐로
- [x]  TodoList 컴포넌트를 완료목록과 미완료목록으로 로딩
- [x]  하나에는 isCompleted가 false인 todo 목록
- [x]  하나에는 isCompleted가 true인 todo 목록

### Users 컴포넌트에 기능 추가하기
- [x]  LocalDate 연동을 통한 favorite 저장기능
- [x]  선택창을 통해 좋아요 / 전체 리스트 조회가능

### 유용성을 위한 추가
- [x]  사용자 (user) 좌우 이동화살표등을 통해 다음 사용자로 넘어가는 기능
- [x]  검색창을 추가하여 사용자를 직접 지정하는것

### 차후 작업 예정
- [ ]  전반적으로 자주 사용되는 기능들 (event , 스켈레톤UI구조 등등)을 따로 분리
- [ ]  에러 처리 항목 추가 (API의 에러항목들은 따로 메세지를 상수로 분리 + 진행 중 에러체크)
- [ ]  시멘틱 테그 , 컨벤션을 비롯한 코드정렬
