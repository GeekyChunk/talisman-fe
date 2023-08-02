import { Button, Input } from '@material-tailwind/react';
import { useFormik } from 'formik';

const LPostForm = ({ }) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        onSubmit: values => onPost(values)
    })

    const onPost = async (data: { title: string, body: string }) => {

    }

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input size="lg" variant="outlined" type="text" label="Title" />
            <Input size="lg" type="text" label="Link: https://..." />
            <div className="flex justify-end gap-2">
                <Button variant="text">Save draft</Button>
                <Button>submit</Button>
            </div>
        </form>
    )
}

export default LPostForm
