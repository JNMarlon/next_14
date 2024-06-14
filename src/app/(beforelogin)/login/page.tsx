'use client';

import { Route } from '@/utils/route';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { Main } from '@/components/Main';

export default function LoginPage() {
    const router = useRouter();

    useLayoutEffect(() => {
        router.replace(Route.IFlowLogin);
    }, []);

    return <Main />;
}
