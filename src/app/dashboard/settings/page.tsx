import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { SettingsCards } from "@daveyplate/better-auth-ui";

const Page = async () => {
    return (
        <>
            <MaxWidthWrapper className="flex justify-center py-12 px-4">
                <SettingsCards />
            </MaxWidthWrapper>
        </>
    );
};

export default Page;
