/**
 * export components from here
 *
 * index에서 불러오기 때문에 아래와 같이 import 경로를 깔끔하게 정리가능
 *
 * @example
 *
 * 적용전 import { LoginModal } from '@/app/(beforelogin)/_components/LoginModal';
 * 적용후 import { LoginModal } from '@/app/(beforelogin)/_components';
 * **/
export * from './Main';
export * from './LoginModal';
export * from './SignupModal';
