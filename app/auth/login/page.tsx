"use client";

import Guard from "@/components/guard";
import { MESSAGES } from "@/constants/auth";
import { useAuth } from "@/hooks/auth";
import { ILoginForm } from "@/types/login";
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
            <div className="max-w-md w-full">
                <div className="max-w-md w-full bg-white rounded-md overflow-hidden">
                    <div className="card-body px-4 py-4">
                        <h1 className="text-center text-3xl text-gray-600 font-medium">login</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col gap-4 pt-4">

                                <div className="form-control">
                                    <input name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder="Username" className={`text-center input input-bordered w-full text-lg ${formik.errors.username && "input-error"}`} />

                                    {formik.errors.username && formik.touched.username ? (
                                        <label className="label">
                                            <span className="label-text-alt text-error text-base font-semibold">{formik.errors.username}</span>
                                        </label>
                                    ) : null}
                                </div>
                                <div className="form-control">
                                    <input name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" placeholder="Password" className={`text-center input input-bordered w-full text-lg ${formik.errors.password && "input-error"}`} />
                                    {formik.errors.password && formik.touched.password ? (
                                        <label className="label">
                                            <span className="label-text-alt text-error text-base font-semibold">{formik.errors.password}</span>
                                        </label>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <button type="submit" className="btn btn-block btn-info rounded-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Guard>
    )
}
