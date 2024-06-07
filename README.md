# NEXT 14 NEW Features


## app router

## route group

실제 라우팅할 경로로 잡히지 않고 단순히 가독성을 위한 그룹핑 역할을 수행

app 디렉토리 아래에서 소괄호를 이용해서 사용

(beforelogin)


## parallel route

같은 레벨의 

## intercepting route

parallel route와 함께 사용시, 기존 화면에서 위에 그려지게 처리할 수 있음

단 이 기능은 다른 페이지에서 "next/Link" 컴포넌트를 이용해서 이동했을 때만 동작하고 

브라우저 창에 주소를 입력해서 접근하거나, 새로고침해서 접근할 경우에는 기존 app router 동작대로, page.tsx 기반으로 라우팅됨


## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
