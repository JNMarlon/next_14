'use client';

import { Route } from '@/utils/route';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { Main } from '@/app/(beforelogin)/_components';

export default function LoginPage() {
    const router = useRouter();

    useLayoutEffect(() => {
        router.replace(Route.IFlowLogin);
    }, []);

    return <Main />;
}
