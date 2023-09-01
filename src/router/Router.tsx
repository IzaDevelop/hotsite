import { Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Home  from "../pages/home";

export function Router() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </ScrollToTop>
    )
}