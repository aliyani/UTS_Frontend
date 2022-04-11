import { useState } from "react";
const Form = () => {
    const [gambar, setGambar] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const simpan = () =>{
        setGambar('')
        setTitle('')
        setContent('')
    }
    return (
        <div className="container border p-4">
            <h3>Input Data Card</h3>
            <hr />
            <label htmlFor="gambar" className="mb-2 me-2">
                Gambar
                <input type="text" className="form-control"
                       placeholder="gambar" id="gambar" value={gambar}
                       onChange={(e)=>setGambar(e.target.value)}
                />
            </label>

            <label htmlFor="gambar" className="mb-2 me-2">
                Title
                <input type="text" className="form-control"
                       placeholder="title" id="title" value={title}
                       onChange={(e)=>setTitle(e.target.value)}
                />
            </label>

            <label htmlFor="gambar" className="mb-2 me-2">
                Content
                <input type="text" className="form-control"
                       placeholder="content" id="content" value={content}
                       onChange={(e)=>setContent(e.target.value)}
                />
            </label>
            <div className="d-flex flex-row-reverse mt-4">
                <button className="btn btn-primary"
                        onClick={simpan}
                >simpan</button>
            </div>
        </div>
    );
}
 
export default Form;