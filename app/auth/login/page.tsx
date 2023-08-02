"use client";

import Guard from "@/components/guard";
import { MESSAGES } from "@/constants/auth";
import { useAuth } from "@/hooks/auth";
import { ILoginForm } from "@/types/login";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';

export default function Page() {
    const auth = useAuth();
    const router = useRouter();
    const [loading, setloading] = useState(false);

    const formik = useFormik<ILoginForm>({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (data) => onSubmit(data),
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        })

    });

    const onSubmit = async (data: ILoginForm) => {
        try {
            const result = await auth.Login(data);
            if (result.succeed) {
                router.push("/dash/");
                toast(MESSAGES.success, { position: "top-center", type: "success" });
                return;
            }

            if (result.type == "wrong_creds") {
                toast(MESSAGES.wrong_creds, { position: "top-center", type: "error" });
                return;
            }

            toast(MESSAGES.server_error, { position: "top-center", type: "warning" });

        } catch (error) {
            toast(MESSAGES.server_error, { position: "top-center", type: "warning" });
        }
    };

    return (
        <Guard guestOnly>
            <div className="max-w-md w-full flex items-center justify-center">
                    <Card className="w-full max-w-[24rem]">
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                Sign In
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-4">
                            <Input label="Email" size="lg" />
                            <Input label="Password" size="lg" />
                            <div className="-ml-2.5">
                                <Checkbox disabled defaultChecked label="Remember Me" />
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant="gradient" fullWidth>
                                Sign In
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Don&apos;t have an account?
                                <Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    Sign up
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
            </div>
        </Guard>
    )
}
