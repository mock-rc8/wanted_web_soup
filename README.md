## 2022.08.20

- 코드템플릿 다운 및 리액트 파일 생성

## 2022.08.21

- 메인 페이지 헤더 퍼블리싱

## 2022.08.22

- 메인 페이지 헤더 퍼블리싱 완료
- 메인 페이지 스플래쉬 화면(애니매이션) 진행 중
  - slick slider 라이브러리 -> 슬라이더 구현
  - prev, next 버튼 커스텀
  - 발생한 이슈
    - 레이아웃이 맞지 않음
    - -> .sick-slide, .slick-track의 width 변경을 하였으나 적용되지 않음
      - 수정 : width의 경우 보여지는 슬라이드의 수(slidesToShow)에 따라 자동으로 정해짐(element.style)
    - 수정필요 : 추가수정이 되었으나 가운데 정렬이 맞지 않음
- 나에게 필요한 커리어 인사이트 섹션, 크리에이터 추천하기 배너 퍼블리싱 완료
- 아티클, VOD 부분 퍼블리싱 완료
  - 버튼 클릭 시 카테고리가 넘어가는 부분 미진행
  - 더 많은 컨텐츠 보기 버튼 클릭 시 이벤트 처리 미진행
  - -> 메인 페이지 퍼블리싱 완료 후 진행 예정
- 직군추천 배너, 이벤트 섹션, 구독 배너, 푸터부분 추가 예정

## 2022.08.23

- 메인페이지 퍼블리싱 완료
  - 메인 페이지 스플래쉬 화면(애니매이션) 이슈
    - 수정필요 : 가운데 정렬이 맞지 않음
  - 배너, 섹션 모두 퍼블리싱 완료
    - 섹션의 경우 동일한 컴포넌트(SectionDiv)사용 후 type으로 구별 후 필요한 스타일 지정
  - 푸터 퍼블리싱 완료
    - component>common / 다른 페이지에도 공통적으로 사용되는 부분
- 로그인창 퍼블리싱 및 API 연동 예정

## 2022.08.24

- 로그인/회원가입창 퍼블리싱 완료
  - 메인페이지 헤더 회원가입/로그인 클릭 시 모달창 보여짐
- 카테고리(행버거 메뉴) 퍼블리싱 완료 및 이벤트 처리
  - 메뉴 아이콘에 마우스 오버시 카테고리 보여지게 함/ 벗어나면 안 보이게 처리
  - 카테고리에 마우스 오버 시 해당 카테고리의 서브카테고리 내용 보여지게 함
  - 카테고리에 맞게 width 설정
  - 추가 구현 필요 : onMouseOver -> 폰트 색상, 배경 색 변경/ 클릭 시 페이지 이동(페이지 구현 완료 후)

## 2022.08.25

- 채용 페이지
  - 헤더, 슬라이더, 버튼, 배너
    - 헤더, 슬라이더
      - 컴포넌트 재사용 / component>common
    - 버튼
      - 컴포넌트 재사용 / 메인페이지와 다른 부분 type으로 구별 후 필요 스타일 지정
    - 배너
      - 새로운 컴포넌트 생성
  - 추가 필요 : 섹션 부분 -> 메인 페이지 컴포넌트 재사용할 수 있는 부분 정리 필요

## 2022.08.26

- 채용 페이지 퍼블리싱
- 채용 페이지 섹션
  - 더미데이터 활용
  - 채용 페이지 컴포넌트 정리

## 2022.08.27

- 채용 페이지 퍼블리싱 완료

## 2022.08.28

- 회원가입 창 퍼블리싱

## 2022.08.29

- 회원가입 창 퍼블리싱
  - 핸드폰 번호 언어 select 구현
  - 동의 체크박스 구현
- 추가 필요
  - 체크박스 체크 시 이벤트 처리
  - 비밀번호 정규식 검사
  - 비밀번호, 비밀번호 확인 동일 검사
  - 이후 페이지 퍼블리싱
  - API 연동

## 2022.08.30

- 회원가입 창 구현
  - 이메일, 비밀번호, 전화번호 정규식 검사
  - 이메일, 전화번호 검사 -> 규격에 맞지 않는경우 오류메세지 보여짐

## 2022.08.31

- 개발 전체 리스트 페이지(wdList) 퍼블리싱
  - 상단 부분 완료
  - 리스트, 하단배너, 우측배너
