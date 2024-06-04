import { Fragment, ReactNode } from 'react';
import { TLayoutProps } from '@/@types/layout';

type TProps = { modal: ReactNode } & TLayoutProps;
export default function BeforeLoginPageDefaultLayout({ children, modal }: TProps) {
    return (
        <Fragment>
            {children}
            {modal}
        </Fragment>
    );
}
