import React from "react";
import Header from "../Header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;