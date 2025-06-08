## 폴더 관리

폴더는 도메인 레벨로 구분하는 것이 좋으며 각각의 엔터티는 features 폴더 밑에 넣고 각 도메인 폴더에는 다음과 같은 폴더를 만들어서 관리를 한다

- components 폴더
    엔터티 Page에서 재사용 가능한 컴포넌트 정의
- pages 폴더
    엔터티 관련한 Page 정의
- schema.ts 파일
    엔터티 관련한 모델을 정의
- queries.ts 파일
    엔터티 관련한 쿼리를 정의

그리고 전체적으로 공통으로 사용하는 항목은 common 폴더 밑에 정의하여 사용
- common/components
    shadcn 등의 공통 컴포넌트 관리
    components.json 파일의 components, ui 폴더의 위치를 변경 필요
```
"components": "~/common/components",
"ui": "~/common/components/ui"
```



