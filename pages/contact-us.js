import { useState } from "react";
import { Typography } from "antd";
import { useRouter } from "next/router";
import { useThemeSwitcher } from "react-css-theme-switcher";
import PublicPage from "layouts/PublicPage";
import Form from "components/Form";
import FormInput from "components/FormTextInput"
import { contactUs } from "utils/imagePaths";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const { currentTheme } = useThemeSwitcher();
  const router = useRouter();
  const toLoginHandler = () => {
    setLoading(true);
    router.push("/login").then(() => {
      setLoading(false);
    });
  };

  return (
    <PublicPage className="public-page">
      <div
        className="horizontal-flex-spaced fit-screen"
        style={{
          justifyContent: "space-evenly",
          backgroundImage: `url(${contactUs})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="left"
        >
            <Typography.Title>Contact Us</Typography.Title>
        </div>
        <div
          className="right"
        >
          <Form>
            <FormInput name="name" label="Your Name" />
            <FormInput name="email" label="Your Email" />
            <FormInput name="enquiry" label="Your Enquiry" type="TextArea" />
          </Form>
        </div>
      </div>
    </PublicPage>
  )
}