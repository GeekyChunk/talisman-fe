'use client';

import { ReactNode } from "react";
import { store } from '@/store'
import { Provider as ReduxProvider } from 'react-redux';

export default function Provider({ children }: {
    children: ReactNode
}) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}
