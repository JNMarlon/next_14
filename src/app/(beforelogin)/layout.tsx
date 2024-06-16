import { Fragment, ReactNode } from 'react';
import { TLayoutProps } from '@/@types/layout';
import styles from '@/app/(beforelogin)/_components/main.module.css';

type TProps = { modal: ReactNode } & TLayoutProps;
export default function BeforeLoginLayout({ children, modal }: TProps) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    );
}
