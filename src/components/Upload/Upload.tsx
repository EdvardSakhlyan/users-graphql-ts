import React from 'react';
import '../../styles/uploader.css'
import {UploadProps} from "../../__generated__/graphql"

const Upload : React.FC<UploadProps> = ({url,onUploaded,id}) => {
    function handleUpload({target : {files}}: React.ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader();

        reader.readAsDataURL(files![0]);

        reader.onload = () => typeof reader.result === 'string' && onUploaded(reader.result)
    }

    return (
        <label htmlFor={"uploader" + id} className="uploader">
            <img src={url} alt="upload" />
            <input type="file" id={"uploader" + id} onChange={handleUpload}/>
        </label>
    );
};

export default Upload;