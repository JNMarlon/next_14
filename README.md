# Next.js 14 Playground


## app router
기존 page router를 대체하는 개념

next 13부터 app router가 추가되며 많은 기능이 새로 추가되었다 

## route group

실제 라우팅할 경로로 잡히지 않고 단순히 가독성을 위한 그룹핑 역할을 수행

app 디렉토리 아래에서 "()"를 사용

예를 들어, 로그인 전후를 기준으로 경로를 그룹핑하고 싶은경우 아래와 같이 사용

```typescript
app 
    ㄴ(beforelogin)
        ㄴ login
        ㄴ signup
    ㄴ(afterlogin)
        ㄴ content
        ㄴ explore
```

## parallel route

같은 디렉토리 레벨의 page.tsx 경로에 page.tsx외에 다른 컴포넌트를 등장시킬수 있음
app 디렉토리 아래에서 "@"를 사용

```typescript
app
    ㄴ(beforelogin)
        ㄴ@modal
        ㄴlogin
```

## intercepting route

parallel route와 함께 사용시, 기존 화면에서 위에 그려지게 처리할 수 있음

단 이 기능은 다른 페이지에서 "next/Link" 컴포넌트를 이용해서 이동했을 때만 동작하고 

브라우저 창에 주소를 입력해서 접근하거나, 새로고침해서 접근할 경우에는 기존 app router 동작대로, page.tsx 기반으로 라우팅됨


## private folder

_components 와 같이 사용할 수 있고, 해당 폴더는 next가 route로 인식하지 않음

따라서 route group 처럼 폴더 정리용으로 사용가능  

## 예약어

```typescript
page.tsx layout.tsx template.tsx default.tsx 등의 예약어는 철자가 하나라도 틀릴 경우 제대로 동작하지 않음

(웃기는건 일부는 제대로 동작하고 일부는 동작하지 않음. 그래서 막상 버그를 맞닥뜨리면 어느지점이 문제인지 디버깅하기가 쉽지않을 수 있음. )

특히 소문자, 대문자 여부 주의할 것

page.tsx를 예로 들자면, 파일명을 실수로 Page.tsx로 할 경우 이를 찾아내기가 쉽지않음 주의할것

```




## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
