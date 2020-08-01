import React, { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ["image/png", "image/jpeg"]
    const changeHandler = (evt) => {
        let selected = evt.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("")
        } else {
            setFile(null)
            setError("Please select an image (png/jpeg)")
        }
    }


    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}></input>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div >{file}</div>}
            </div>
        </form>
    )
}

export default UploadForm;