import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        return redirect("/dashboard");
    }

    return (
        <section className="pt-8">
            <MaxWidthWrapper>
                <h1>Hello</h1>
                <Button>Click Me</Button>
            </MaxWidthWrapper>
        </section>
    );
};

export default Page;
