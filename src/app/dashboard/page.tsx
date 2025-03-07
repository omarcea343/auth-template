import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { auth } from "@/lib/auth";
import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return redirect("/");
    }

    return (
        <>
            <RedirectToSignIn />

            <SignedIn>
                <section className="pt-8">
                    <MaxWidthWrapper>
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">Welcome back, {session.user.name}!</p>
                    </MaxWidthWrapper>
                </section>
            </SignedIn>
        </>
    );
};

export default Page;
