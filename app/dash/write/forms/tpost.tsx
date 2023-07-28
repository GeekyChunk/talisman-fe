import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const TPostForm = ({ }) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        onSubmit: values => onPost(values)
    })

    const onPost = async (data: { title: string, body: string }) => {
        toast("Posted!!", {
            position: "top-center",
        })
    }

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Title" className="input input-bordered w-full text-base" />
            <textarea className="textarea textarea-bordered w-full text-base" placeholder="Bio" rows={6}></textarea>
            <div className="flex justify-end gap-2">
                <button className="btn btn-info btn-outline rounded-full">Save draft</button>
                <button className="btn btn-info rounded-full">submit</button>
            </div>
        </form>
    )
}

export default TPostForm
