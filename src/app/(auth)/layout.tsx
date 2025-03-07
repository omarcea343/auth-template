import { Navbar } from "@/components/layout/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-[calc(100vh-1px)] flex flex-col antialiased">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
