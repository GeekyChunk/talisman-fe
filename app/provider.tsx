'use client';

import { ReactNode } from "react";
import { store } from '@/store'
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from "@material-tailwind/react";

export default function Provider({ children }: {
    children: ReactNode
}) {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    )
}
