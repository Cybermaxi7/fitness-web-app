import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
