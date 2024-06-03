import { TLayoutProps } from '@/@types/layout';

type TProps = {} & TLayoutProps;
export default function AfterloginLayout({ children }: TProps) {
    return (
        <div>
            afterloginLayout
            {children}
        </div>
    );
}
