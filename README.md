# 📌 13주차 과제[Mission13]

이 과제는 실제 프론트엔드 신입 채용 과제임으로 각별히 외부 유출에 주의해 주시기 바라며 특히 블로그 포스팅에 유의해 주시기 바랍니다.

## 필수 과제
- 과제 기한
  - 과제 수행 기간 : 2023년 8월 25일(금) ~ 2023년 8월 30일(수)
  - 멘티 코드 리뷰 기간 : 2023년 8월 31일(목) ~ 2023년 9월 1일(금)
  - 멘토 코드 리뷰 기간 : 2023년 8월 31일(목) ~ 2023년 9월 4일(월)
  - 코드 리뷰 반영 기간 : 2023년 9월 5일(화) ~ 2023년 9월 6일(수)
- 내용
  - View 네비게이션 시스템 구현과 옛한글 입력기 둘 중 하나를 선택해서 과제를 완성해 주세요.
  - 2가지 과제 중 택 1 진행, 시간이 된다면 2가지 다 구현해보셔도 됩니다.
 
### View 네비게이션 시스템 구현

React, TypeScript를 이용한 View 네비게이션 컴포넌트를 구현합니다. 스타일링 라이브러리는 자유롭게 이용하셔도 됩니다. 이 시스템은 모바일 환경에서 자주 볼 수 있습니다.

**필요한 기능**
- [ ] 이벤트를 통한 페이지 이동이 가능하다.
- [ ] 이전 페이지로 되돌아갈 수 있다.
  - [ ] 히스토리에 남은 페이지라면 어디든 되돌아가는 것이 가능하다.
- [ ] 웹을 새로고침하더라도 페이지가 유지되어야 한다.
- [ ] 페이지 전환 트랜지션을 설정할 수 있다.
  - [ ] 트랜지션 애니메이션은 최소 2개 있어야 한다.

UI는 자유롭게 구현해도 상관없습니다. 단, 기본적으로 페이지 제목과 뒤로가기 버튼은 반드시 존재해야 합니다.

⚠️ 참고로 router 등을 이용하여 URL이 변경되는 진짜 페이지 이동 구현은 아닙니다. 단순히 컴포넌트 내에서 로직으로서 동작되는 UI 입니다.

<img width="100%" src="https://github.com/prgrms-fe-devcourse/FEDC4-13_React/assets/44829481/eaa3a6f6-2dbb-4f2e-a619-c4e2d162bf93"/>

### 옛한글 입력기

React와 TypeScript만을 이용하여 옛한글 입력기를 구현합니다. 옛한글은 현재 한글에 없는 자음, 모음을 포함합니다. 옛한글에서 쓰는 한글 자음, 모음과 다른 문자들을 입력 받아 화면에 표시해야 합니다.

**고려 사항**
- [ ] 현대 한글 자음과 모음으로 옛한글 자음과 모음을 입력하는 완전한 방법을 고안해야 합니다. 예를 들어, "ㅂㅇ"을 입력하면 'ㅸ'으로 인식하는 규칙을 만들어야 합니다.
- [ ] 옛한글을 화면에 표시해야 한다. 예를 들어, 다음과 같이 화면에 표시할 수 있어야 합니다.

힌트는 현재 입력 상태에 따른 유한상태머신을 구현하는 것입니다. 현재 작성 중인 한글의 상태(초성, 중성, 종성 등)을 인지하고 그에 따라 들어오는 입력을 분기처리할 수 있습니다.

위 규칙에 따라 옛한글 조합을 구현 후 웹 UI에서 실행할 수 있으면 됩니다. 대표적인 옛한글 입력기 사이트는 https://akorn.bab2min.pe.kr/input/ 이며, 꼭 이 웹사이트와 동일한 입력 규칙을 사용할 필요는 없습니다.

옛한글은 대부분의 폰트가 지원하지 않기 때문에 특정 폰트를 이용하셔야 합니다. 예를 들어, ‘나눔바른고딕옛한글’ 과 같은 웹폰트를 사용할 수 있습니다.

