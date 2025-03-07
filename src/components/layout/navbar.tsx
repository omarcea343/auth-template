import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";
import { AirVent } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { buttonVariants } from "../ui/button";

export async function Navbar() {
    return (
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <AirVent />
                        <h1 className="text-2xl font-bold">
                            Auth <span className="text-primary">Template</span>
                        </h1>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        <SignedIn>
                            <UserButton size="full" />
                        </SignedIn>
                        <SignedOut>
                            <Link href="/sign-in" className={buttonVariants({})}>
                                Get Started
                            </Link>
                        </SignedOut>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}
