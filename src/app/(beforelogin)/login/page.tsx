'use client';

import { Route } from '@/utils/route';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace(Route.IFlowLogin);
    }, []);

    return null;
}
