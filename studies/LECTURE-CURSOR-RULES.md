할루신네이션이 없이 CURSOR가 사용자가 제공한 문서를 바탕으로 대답
- Context 이용

.cursorrules 를 작성
- AI와 채팅할 때 어떤 식으로 답변을 받을 건지 지시 사항 작성
- 코드 자동 완성에 대한 규칙
- 사용하지 않는 문법이나 라이브러리가 있는 경우에 해당 내용을 적어준다

## .cursorrules

Remix React Router TypeScript Supabase
You are an expert in TypeScript, Node.js, React Router, React, Remix, Shadcn UI, Radix UI, Tailwind and Supabase.

Key Principles

- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported component, subcomponents, helpers, static content, types.

Naming Conventions

- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for components.

TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use maps instead.
- Use functional components with TypeScript interfaces.

Syntax and Formatting

- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

UI and Styling

- Use Shadcn UI, Radix, and Tailwind for components and styling.

Key Conventions

- Don't import anything from Radix UI. Always import UI componentsfrom Shadcn UI.
- Don't import anything from Remix. Any @remix-run import should be imported from "react-router".
- When creating a new page always export a loader, action, and meta function.
- Route types should be imported like this: `import type { Route } from "./+types/...";`
- `useLoaderData` does not exist anymore. Instead, components receive Router.ComponentProps type param that contains loaderData.
- `useActionData` does not exist anymore. Instead, components receive Router.ComponentProps type param that contains actionData.
- Never use `useLoaderData` or `useActionData` in page components.
- `loader` function takes a Route.LoaderArgs type param.
- `action` function takes a Route.ActionArgs type param.
- `meta` function takes a Route.MetaFunction type param.
- `meta` returns MetaFunction type.
- `json` does not exists anymore. Return plain objects i.e `export function loader({ request }: Route.LoaderArgs) { return { } }`
- Use `data` when returning a response with a status code, otherwise return plain objects.

## .cursorrules를 설명한 내용

다음은 **Remix 기반 프로젝트에서 Cursor 에디터 내 AI에게 지시하는 작업 지침**을 설명한 것입니다. 이 가이드는 **TypeScript, React, Remix, Supabase 등 현대 웹 스택을 사용할 때의 코드 스타일, 구조, 규칙**을 정리한 것입니다. 이를 **한국어로 요약 설명**하면 다음과 같습니다:

---

## 🧠 기본 전제 (Key Principles)

* **짧고 기술적인 TypeScript 코드**를 작성하고, **정확한 예시**를 포함할 것
* **클래스 사용은 지양**, 함수형 선언(Functional, Declarative)을 사용할 것
* 코드 중복보다는 \*\*반복문이나 모듈화(재사용)\*\*를 우선
* 변수명은 **보조 동사 포함**해서 의미 있게 (`isLoading`, `hasError` 등)
* 파일 구성은 아래와 같이 정리:

  1. export된 메인 컴포넌트
  2. 서브 컴포넌트
  3. 헬퍼 함수
  4. 정적 컨텐츠
  5. 타입 정의

---

## 📁 네이밍 규칙 (Naming Conventions)

* **디렉토리 이름은 소문자 + 대시(-)** 형식 사용 → 예: `components/auth-wizard`
* 컴포넌트는 **Named Export**를 사용할 것 (기본 export 금지)

---

## 🟦 TypeScript 사용 원칙

* 전체 코드에 **TypeScript 사용**
* `type`보다는 **interface 사용 선호**
* `enum`은 사용하지 말고 **map 객체**로 대체
* 함수형 컴포넌트를 작성할 때도 **interface 기반 props** 사용

---

## ✍️ 문법 및 포맷팅 (Syntax and Formatting)

* **순수 함수는 `function` 키워드로 선언**
* 단순한 조건문은 **불필요한 중괄호 없이 간결하게**
* JSX는 **선언형 스타일**로 작성

---

## 🎨 UI 및 스타일링

* UI 구현 시에는 **Shadcn UI**, **Radix**, **Tailwind CSS**를 사용할 것

---

## ⚠️ 핵심 규칙 (Key Conventions)

### 1. 라이브러리 Import 규칙

* **Radix UI에서 직접 import 금지** → Radix 컴포넌트는 항상 Shadcn UI를 통해 가져올 것
* **Remix에서 직접 import 금지** → 모든 `@remix-run/*` 모듈은 `"react-router"`에서 가져올 것

### 2. 페이지 생성 시 기본 구조

* 새 페이지를 만들 때는 반드시 아래 3가지를 `export`해야 함:

  * `loader`
  * `action`
  * `meta`

### 3. 타입 사용

* `Route` 관련 타입은 다음처럼 import:

  ```ts
  import type { Route } from "./+types/...";
  ```
* `loader` 함수는 `Route.LoaderArgs` 타입의 파라미터 사용
* `action` 함수는 `Route.ActionArgs` 타입의 파라미터 사용
* `meta` 함수는 `Route.MetaFunction` 타입 파라미터 사용 및 `MetaFunction` 반환

### 4. 데이터 접근 방식

* `useLoaderData`, `useActionData`는 더 이상 사용하지 않음
* 대신 **컴포넌트에서 `Router.ComponentProps` 타입의 파라미터를 통해 loaderData, actionData를 접근**

```tsx
export function PageComponent(props: Router.ComponentProps) {
  const { loaderData, actionData } = props;
}
```

### 5. JSON 응답 처리

* `json()` 함수는 더 이상 존재하지 않음
* 대신 **단순한 객체 반환**

  ```ts
  export function loader({ request }: Route.LoaderArgs) {
    return { message: "ok" };
  }
  ```
* 만약 **HTTP 상태 코드와 함께 응답**할 경우 `data()` 함수 사용

---

## ✅ 한 줄 요약

> "클래스 없이, 선언형 함수 기반으로, Shadcn UI와 Tailwind를 활용해, Remix는 React Router처럼 다루며, loader/action/meta는 명확히 export하고, TypeScript 인터페이스 기반으로 정리한다."

---

필요하다면 위 가이드를 **실제 코드 예제와 함께 한국어 문서화**해 드릴 수도 있습니다.

---


