import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const TPostForm = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            title: "",
            caption: ""
        },
        onSubmit: values => onPost(values),
        validationSchema: Yup.object().shape({
            title: Yup.string().required('Title is required'),
            caption: Yup.string().required('Is required!')
        })
    })

    const onPost = async (data: { title: string, caption: string }) => {
        router.back();
        toast("Posted!!", {
            position: "top-center",
            type: "success"
        });

    }

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
                <Input name="title" error={(formik.errors.title && formik.touched.title) == true} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" label="Title" size="lg" />
                {
                    ((formik.errors.title && formik.touched.title) == true) ? (
                        <Typography
                            variant="small"
                            color="red"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >
                            {formik.errors.title}
                        </Typography>
                    ) : (<></>)
                }
            </div>

            <div className="form-control">
                <Textarea name="caption" error={(formik.errors.caption && formik.touched.caption) == true} onChange={formik.handleChange} onBlur={formik.handleBlur} label="Bio" rows={6} />
                {
                    ((formik.errors.caption && formik.touched.caption) == true) ? (
                        <Typography
                            variant="small"
                            color="red"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >
                            {formik.errors.caption}
                        </Typography>
                    ) : (<></>)
                }
            </div>

            <div className="flex justify-end gap-2">
                <Button variant="text">Save draft</Button>
                <Button type="submit">submit</Button>
            </div>
        </form>
    )
}

export default TPostForm
