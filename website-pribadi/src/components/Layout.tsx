import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: ReactNode;
    };

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/src/app/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}