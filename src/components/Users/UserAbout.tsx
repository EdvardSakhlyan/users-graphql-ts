import React from 'react';
import Upload from "../Upload/Upload";
import { AboutProps } from "../../__generated__/graphql";


const UserAbout : React.FC<AboutProps> = ({isEditMode,img,about,setTextareaInput, url,onUploaded}) => {
    if (isEditMode){
        return (
            <div className="users-item-info-section">
                <Upload onUploaded={onUploaded} url={url} id={'9102382120293012093'}/>
                <textarea defaultValue={about} onChange={({target: {value}}) => setTextareaInput(value)} ></textarea>
            </div>
        )
    }else {
        return  (
            <div className="users-item-info-section">
                <img alt="user-img" src={img}/>
                <p><span>About:</span>{about}</p>
            </div>
        )
    }
};

export default UserAbout;