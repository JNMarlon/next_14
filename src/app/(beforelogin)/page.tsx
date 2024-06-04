import Image from 'next/image';
import Link from 'next/link';
import { Route } from '@/utils/route';
import zLogo from '../../../public/zlogo.png';
import styles from './page.module.css';

export default function BeforeLoginDefaultPage() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src={zLogo} alt="logo" />
            </div>
            <div className={styles.right}>
                <div>
                    <h1>지금 일어나고 있는 일</h1>
                </div>
                <div>
                    <h2>지금 가입하세요.</h2>
                </div>
                <Link href={Route.IFlowSignUp} className={styles.signup}>
                    계정 만들기
                </Link>
                <div>
                    <h3>이미 트위터에 가입하셨나요?</h3>
                </div>
                <Link href={Route.Login} className={styles.login}>
                    로그인
                </Link>
            </div>
        </div>
    );
}
