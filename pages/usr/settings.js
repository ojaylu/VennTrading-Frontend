import LoggedInLayout from "layouts/logged-in/MainLayout";
import Settings from "components/Settings";

export default function() {
    console.log("API SECRET" + process.env.NEXT_PUBLIC_API_SECRET);

    return (
        <LoggedInLayout style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%"
        }}>
            <Settings />
        </LoggedInLayout>
    )
}