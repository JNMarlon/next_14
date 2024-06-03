import { TLayoutProps } from '@/@types/layout';
import { Fragment } from 'react';

type TProps = {} & TLayoutProps;
export default function HomeLayout({ children }: TProps) {
    return (
        <Fragment>
            <div>homelayout</div>
            {children}
        </Fragment>
    );
}
