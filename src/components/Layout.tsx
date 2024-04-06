import { ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
    children: ReactElement;
}

export function Layout(props: LayoutProps) {
    return (
        <>
            <Header />
            <main className="w-full min-h-[calc(100vh-80px)] mx-auto flex flex-col">
                {props.children}
            </main>
            <Footer/>
        </>
    )
}