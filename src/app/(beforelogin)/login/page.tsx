import { redirect } from 'next/navigation';
import { Route } from '@/utils/route';

export default function LoginPage() {
    redirect(Route.IFlowLogin);
}
