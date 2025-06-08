1. 폴더구조를 생성
app
- common
.. components
.. pages
features
- users
. schema.ts
. queries.ts
.. components
.. pages

tsconfig.json에서 ~ 에 대한 폴더 설정을 확인할 필요가 있음

2. shadcn ui의 컴포넌트 추가를 위한 경로 변경 
components.json 부분 수정

3. 기본경로 변경
routes.ts에서 위에서 변경된 폴더구조에 의해서 home page react 파일의 위치를 변경한다

4. 화면의 navigation 생성
공통 컴포넌트이므로 ~/common/components 밑에 생성
shadcn ui를 사용하여 진행하며 사이트에서 문서를 참고하면 쉽게 구현할 수 있다.
- 해당 컴포넌트의 설치가 필요
- 컴포넌트의 props를 선언하는 법
- 아이콘은 lucide icon을 많이 사용한다

5. feature 항목들에 필요한 재사용가능한 컴포넌트를 생성한다
- 기본적으로 features/[feature name]/components/[reuseComponent.tsx]로 생성한다
- 한 페이지 (home-page.tsx)에서 전체적으로 작성 후 컴포넌트화 수행
- cursor의 파일을 생성하는 ai 기능을 이용하면 좀 더 빠르게 작업이 가능

6. routes.ts 파일을 통한 패스 및 페이지 설정
경로별로 해당 페이지를 어디로 가게 할지에 대해서 설정
경로는 대체적으로 다음과 같이 prefix에 해당하는 path에 하위 path의 조합으로 되기 때문에 prefix function을 이용해서 routes 파일에서 작업할때 path의 중복 입력을 막는다.
- 커서에서 파일별로 작성한 path를 가져와서 쉽게 자동완성을 하기 위해선 해당 path가 들어간 파일을 열고 작업을 해야 한다
- index를 이용해서 prefix에대한 기본 페이지를 설정 - 해당 경로의 index.tsx와 동일하다고 생각하면 된다
- route를 통해서 서브 페이지를 설정
- 경로에 :path 가 들어가는 경우에는 해당 부분이 라우트에서 변경이 될거다라는 것을 의미한다
- prefix안에 여러개의 prefix를 둘 수 있다

위와 같이 routes 작업을 하기 전에 포털의 전체적인 구조를 먼저 설계한 다음에 cursor를 이용해서 이런식으로 작업을 하게된다면 쉽게 기본적인 페이지를 만드는 반복적인 작업을 피할 수 있다.

이렇게 작업한 경로에 해당하는 파일을 cursor를 통해서 한번에 생성도 가능하다
- "routes 파일의 경로의 모든 파일을 생성해줘"
- "routes.ts의 경로에 해당하는 파일을 생성해줘. 단, 이미 생성되어 있는 파일은 생성하지 말고, 코드는 간단히 텍스트만 출력하도록 해줘."

7. loader 
데이터를 가져오는데 사용되는 함수
server-side에서 실행되며 UI가 사용자에게 보여지기 전에 미리 실행된다
- 모든 로직이 server-side에 있기 때문에 보안적으로도 안전하다
loader가 없는 경우에는 react의 페이지를 만드는 함수(export default 함수)에 데이터를 가지고 오는 로직을 작성해야 하는데, 이런 수고를 덜어주고 쉽게 데이터를 가져와서 사용할 수 있게 해준다
- useEffect를 사용해서 컴포넌트를 마운트한 다음에 API를 호출하고 리턴된 데이터를 state안에 넣고 화면에 출력하는 로직을 작성했었다.
해당 함수에서 리턴되는 값은 UI Component의 props로 전달된다.
데이터를 가져오는데 시간이 걸리는 경우에는 로딩 스피너와 같은 처리를 할 필요가 있음
- 데이터가 화면에 출력되기 전까지 사용자에게 임시로 보여주는 화면을 리턴할 수 있음

8. meta
웹사이트의 head 부분을 작성하는 함수

9. .react-router 폴더
서버를 실행하면 자동으로 생성되는 폴더
type safty 기능을 라우터에 추가하는 역할을 한다
- 만일 tsx 파일에 export default 함수에 loader를 통해서 리턴되는 데이터를 받아야 하는 경우에 해당 타입을 일일히 선언하는 것은 무척 힘든 작업이 된다.
- 이런 타입 생성을 react-router를 사용하면 자동으로 생성해 준다.
    . route.ts 파일의 전체 파일을 확인
    . 필요한 타입을 .react/types/app... 밑에 해당 path로 타입을 자동으로 생성해 준다.
    . 개발자는 props를 정의할 때 타입을 Route.ComponentProps라고만 선언해 주면 된다.

```
import type { Route } from "./+types/home-page";
...

export default function HomePage({ loaderData }: Route.ComponentProps) {
    ...
}
```

10. Page 작업

때에 따라서 화면을 리턴하지 않고 server-side의 로직만 실행하고 다른 페이지로 이동을 하는 케이스를 개발할 필요가 있다





