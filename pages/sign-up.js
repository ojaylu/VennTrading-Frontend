import PublicPage from "layouts/PublicPage";
import SignUpForm from "components/Form";
import FormInput from "components/FormInput";
import { Steps, Typography } from "antd";
import { useState } from "react";
import * as yup from "yup";
import { useAuth } from "components/AuthProvider";
const { Step } = Steps;

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required()
}).required();

export default function SignUp() {
    const { createUser } = useAuth();

    const [currentStep, setStep] = useState(0);
    const steps = [
        {title: "Set Up User Profile", description: "Fill in the required information."},
        {title: "Verify Email", description: "Verify the inputted email."}
    ]
    const fields = [
        {name: "email", label: "Email", required: true},
        {name: "password", label: "Password", required: true, type: "Password"},
        {name: "name", label: "Preferred Name", required: true}
    ]

    return (
        <PublicPage>
            <Steps
                current={currentStep}
                style={{
                    width: "70%",
                    maxWidth: "600px"
                }}
            >
                {steps.map((step, index) => {
                    return (
                        <Step key={index} title={step.title} description={step.description} />
                    )
                })}
            </Steps>
            <div
                className="sign-up"
            >
                <Typography.Title level={3}>
                    Getting Started with your Trading Journey
                </Typography.Title>
                <SignUpForm left={9} submitHandler={createUser} schema={schema}>
                    {fields.map((field, index) => {
                        return (
                            <FormInput key={index} {...field} />
                        )
                    })}
                </SignUpForm>
            </div>
        </PublicPage>
    )
}