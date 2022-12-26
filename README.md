# ChulCheck-client

<img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/mrbartrns/chulcheck/node.js.yml">

## 서비스 소개

> Chulcheck 앱은 팀원과 스터디를 진행할 때 출석을 관리할 수 있는 앱입니다.

## 주요 기능

- 사용자는 스터디 그룹을 만들 수 있습니다.
- 사용자는 스터디 그룹을 검색할 수 있습니다.
- 사용자는 스터디 그룹에 참여할 수 있습니다.
- 사용자는 스터디 그룹을 선택하고 출석할 수 있습니다.

## 기술 스택

### 개발

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### 코드 관리 & Continuous Integration

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-ff69b4.svg?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## 폴더 구조

<details>

  <summary>details</summary>

```text
src
 ┣ api
 ┃ ┣ attendance.ts
 ┃ ┣ auth.ts
 ┃ ┣ instance.ts
 ┃ ┣ organization.ts
 ┃ ┗ types.ts
 ┣ components
 ┃ ┣ AuthFormTemplate
 ┃ ┃ ┣ AuthFormTemplate.stories.tsx
 ┃ ┃ ┣ AuthFormTemplate.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Calender
 ┃ ┃ ┣ Calender.tsx
 ┃ ┃ ┣ CalenderHeader.tsx
 ┃ ┃ ┣ CalenderInner.tsx
 ┃ ┃ ┣ ColumnHeader.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ CalenderData
 ┃ ┃ ┣ CalenderData.tsx
 ┃ ┃ ┣ DataCell.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Header
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ layouts
 ┃ ┃ ┣ AuthFormLayout.tsx
 ┃ ┃ ┣ GlobalLayout.tsx
 ┃ ┃ ┗ MainPageLayout.tsx
 ┃ ┣ MainPage
 ┃ ┃ ┣ AttendanceCard.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ OrganizationInfoPage
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┗ Template.tsx
 ┃ ┗ shared
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┣ ButtonBase.stories.tsx
 ┃ ┃ ┃ ┣ ButtonBase.tsx
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ LoadingButton.stories.tsx
 ┃ ┃ ┃ ┗ LoadingButton.tsx
 ┃ ┃ ┣ Dropdown
 ┃ ┃ ┃ ┣ Dropdown.stories.tsx
 ┃ ┃ ┃ ┣ Dropdown.tsx
 ┃ ┃ ┃ ┣ DropdownItem.tsx
 ┃ ┃ ┃ ┣ DropdownMenu.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┣ Headings
 ┃ ┃ ┃ ┣ Headings.tsx
 ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┣ Input
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Input.stories.tsx
 ┃ ┃ ┃ ┗ Input.tsx
 ┃ ┃ ┣ Modal
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Modal.stories.tsx
 ┃ ┃ ┃ ┗ Modal.tsx
 ┃ ┃ ┣ NavigationBar
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ NavigationBar.stories.tsx
 ┃ ┃ ┃ ┗ NavigationBar.tsx
 ┃ ┃ ┣ Paragraph
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Paragraph.stories.tsx
 ┃ ┃ ┃ ┗ Paragraph.ts
 ┃ ┃ ┣ Select
 ┃ ┃ ┃ ┣ ArrowDown.tsx
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ Select.tsx
 ┃ ┃ ┗ Spinner
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Spinner.stories.tsx
 ┃ ┃ ┃ ┗ Spinner.tsx
 ┣ contexts
 ┃ ┣ AttendanceProvider.tsx
 ┃ ┗ index.ts
 ┣ factory
 ┃ ┗ Calender
 ┃ ┃ ┣ Caldender.ts
 ┃ ┃ ┣ Day.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ Week.ts
 ┣ hooks
 ┃ ┣ shared
 ┃ ┃ ┣ useClickAway.ts
 ┃ ┃ ┣ useFetch.ts
 ┃ ┃ ┣ useForm.ts
 ┃ ┃ ┣ useInterval.ts
 ┃ ┃ ┗ useLoading.ts
 ┃ ┣ useAttendance
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useAttendance.helper.ts
 ┃ ┃ ┗ useAttendance.ts
 ┃ ┣ useCalender
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useCalender.helper.ts
 ┃ ┃ ┗ useCalender.ts
 ┃ ┣ useOrganization
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ useOrganization.helper.ts
 ┃ ┃ ┗ useOrganization.ts
 ┃ ┗ useTimer
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ useTimer.ts
 ┣ pages
 ┃ ┣ GroupCreatePage.tsx
 ┃ ┣ MainPage.tsx
 ┃ ┣ NotFoundPage.tsx
 ┃ ┣ OrganizationInfoPage.tsx
 ┃ ┣ SigninPage.tsx
 ┃ ┗ SignupPage.tsx
 ┣ routes
 ┃ ┣ index.ts
 ┃ ┣ Protected.tsx
 ┃ ┗ router.tsx
 ┣ themes
 ┃ ┣ breakpoints.ts
 ┃ ┣ colors.ts
 ┃ ┣ fontSizes.ts
 ┃ ┣ headings.ts
 ┃ ┗ shadows.ts
 ┣ utils
 ┃ ┣ bisect.ts
 ┃ ┣ colorSelector.ts
 ┃ ┣ dateFormat.ts
 ┃ ┣ parse.ts
 ┃ ┗ storage.ts
 ┣ __tests__
 ┃ ┣ bisect.test.ts
 ┃ ┣ dateFormat.test.ts
 ┃ ┗ parse.test.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.tsx
 ┣ logo.svg
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

</details>

## contributing

기능을 제안하거나 버그를 발견했을 시 기여할 수 있습니다.

1. issue 탭을 이용하여 이슈 등록
2. pull request

### branch rules

```bash
# example

feat: 새로운 기능 추가

```

- **feat**: 기능 추가, 삭제, 변경(or ✨ emoji) - 제품 코드 수정 발생
- **fix**: 버그 수정(or 🚑 emoji) - 제품 코드 수정 발생
- **doc**: 문서 추가, 삭제, 변경(or 📚 emoji) - 코드 수정 없음
- **style**: 코드 형식, 정렬, 주석 등의 변경, eg; 세미콜론 추가(or 🎨 emoji) - 제품 코드 수정 발생, 하지만 동작에 영향을 주는 변경은 없음
- **refactor**: 코드 리펙토링, eg. renaming a variable(or 🚜 emoji) - 제품코드 수정 발생
- **test**: 테스트 코드 추가, 삭제, 변경 등(or 🔬 emoji) - 제품 코드 수정 없음. 테스트 코드에 관련된 모든 변경에 해당
- **chore**: 프로젝트 구동 환경의 변경 - 제품 코드 수정 없음

위쪽이 가장 높은 우선 순위를 갖습니다.

## 테스트 화면

- 로그인

![test1](https://user-images.githubusercontent.com/56826914/205581454-a0434528-f994-4c5c-9dea-d5db54f5f2d5.gif)

- 그룹 만들기

![create_group](https://user-images.githubusercontent.com/56826914/205581110-77107c3d-4f2e-46ce-a51c-48d028ee263b.gif)

- 그룹 찾기

![search_group](https://user-images.githubusercontent.com/56826914/205581115-a1472fb7-6c47-4d06-9ee6-cf751f780c1a.gif)

- 내가 속한 그룹 보기

![my_group](https://user-images.githubusercontent.com/56826914/205581113-3c748aca-14d7-451a-a4b4-2ddbf6458052.gif)

- 출석하기

![attend](https://user-images.githubusercontent.com/56826914/205581104-18dc6dbd-fd3c-424e-91f3-11a25c8f341d.gif)

- 달력 컴포넌트 동작 방식

![test2](https://user-images.githubusercontent.com/56826914/201527007-ca7a90d0-12c2-49d5-85c5-d943029fafd5.gif)

#### 참고사항

백엔드는 [chulcheck-server](https://github.com/mrbartrns/chulcheck-server) 레포에 있으며, 현재 배포되지 않은 상태입니다.
