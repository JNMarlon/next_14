import { LoginModal } from '@/components/LoginModal';

/**
 * next/link 태그로 접근시 팝업 노출
 *
 * @example
 * ```typescript
 *
 *   <Link href={Route.Login} className={styles.login}>
 *          로그인
 *   </Link>
 *
 * ```
 *
 * 브라우저 창에 주소를 직접 입력해서 접근하거나, 새로고침할 경우
 *
 * i/flow/login/page.tsx 로 라우팅 됨
 * */
export default function LoginModalPage() {
    return <LoginModal />;
}
