'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function initPreline(times = 0) {
    setTimeout(
        () => {
            try {
                window.HSStaticMethods.autoInit();
            } catch (error) {
                if (times <= 5) {
                    initPreline(times + 1);
                } else {
                    throw error;
                }
            }
        },
        100 * (times + 1),
    );
}

export default function AppScripts() {
    const path = usePathname();

    useEffect(() => {
        // @ts-ignore
        import('preline/preline');
    }, []);

    useEffect(() => {
        initPreline();
    }, [path]);

    return null;
}