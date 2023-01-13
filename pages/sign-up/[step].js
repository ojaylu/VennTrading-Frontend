import { useRouter } from "next/router";
import Error from "next/error";
import PublicPage from "layouts/PublicPage";
import SignUpForm from "components/Form";
import FormInput from "components/FormTextInput";
import * as yup from "yup";
import isEmpty from "lodash/isEmpty";
import { Typography, Steps } from "antd";
import { useAuth } from "components/AuthProvider";
import Loading from "layouts/Loading";

const step1Schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

const step1Fields = [
    {name: "email", label: "Email", required: true},
    {name: "password", label: "Password", required: true, type: "Password"},
]

const step2Schema = yup.object({
    displayName: yup.string().required()
})

const step2Fields = [
    {name: "displayName", label: "Preferred Name", required: true}
]

export default function SignUp() {
    const router = useRouter();
    const { step } = router.query;
    const { createUser, updateUserProfile } = useAuth();
    // if step is not int, parseInt returns NaN which does not eval the second statement
    const currentStep = parseInt(step) && parseInt(step) - 1;

    const steps = [
        {
            title: "Set Up User Credentials", 
            description: "Fill in the required information.", 
            type: "form", 
            fields: step1Fields,
            schema: step1Schema,
            submitHandler: createUser
        },
        {
            title: "Set Up User Profile", 
            description: "Fill in the required information.", 
            type: "form", 
            fields: step2Fields, 
            schema: step2Schema,
            submitHandler: updateUserProfile
        },
        {
            title: "Verify Email", 
            description: "Verify the inputted email."
        }
    ]

    return (
        isEmpty(router.query) ? // server-side rendering
        <Loading /> :
        (!isNaN(currentStep) &&  currentStep < steps.length?
        <PublicPage>
            <Steps
                current={currentStep}
                style={{
                    maxWidth: "1000px",
                    marginBottom: "80px"
                }}
                items={steps.map(step => ({title: step.title, description: step.description}))}
            />
            <div
                className="sign-up"
            >
            {
                steps[currentStep].type == "form" ?
                <>
                    <Typography.Title level={3}>
                        {steps[currentStep].title}
                    </Typography.Title>
                    <SignUpForm left={9} submitHandler={steps[currentStep].submitHandler} schema={steps[currentStep].schema}>
                        {steps[currentStep].fields.map((field, index) => {
                            return (
                                <FormInput key={index} {...field} />
                            )
                        })}
                    </SignUpForm>
                </> :
                <Typography.Paragraph
                    style={{
                        textAlign: "center",
                        userSelect: "none"
                    }}
                >
                    Check your mainbox<br />
                    and<br />
                    Verify your email
                </Typography.Paragraph>
            }
            </div>
        </PublicPage> :
        <Error statusCode={404} />)
    )
}