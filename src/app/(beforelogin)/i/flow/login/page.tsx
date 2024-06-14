import { LoginModal } from '@/components/LoginModal';

/**
 * 브라우저 주소창으로 접근하거나, 새로고침했을 때 노출
 *
 * next/Link 로 접근했을 때 노출되는 컴포넌트는
 *
 * @modal/(.)/flow/login/page.tsx
 *
 * */
export default function IFlowLoginPage() {
    return <LoginModal />;
}
