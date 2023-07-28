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
            <input type="text" placeholder="Title" className="input input-bordered w-full text-base" />
            <input type="text" placeholder="Link: https://..." className="input input-bordered w-full text-base" />
            <div className="flex justify-end gap-2">
                <button className="btn btn-info btn-outline rounded-full">Save draft</button>
                <button className="btn btn-info rounded-full">submit</button>
            </div>
        </form>
    )
}

export default LPostForm
