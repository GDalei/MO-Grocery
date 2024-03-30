"use client";
import React, { useState, ReactNode } from "react";
import Header from '@/components/header/Header';
import FooterComponent from "../FooterWithSitemap/FooterComponent";
export default function DefaultLayout({
    children,
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* <!-- ===== Page Wrapper Start ===== -->  flex h-screen overflow-hidden*/}
            <div className="flex">
                {/* <!-- ===== Sidebar Start ===== --> */}
                {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}

            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
            <FooterComponent />
        </>
    );
}
