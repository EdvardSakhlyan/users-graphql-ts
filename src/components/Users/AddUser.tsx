import React, {useState} from 'react';
import {useMutation} from "@apollo/client";
import {ADD_USER, All_USERS} from "../../apollo/users";
import Upload from "../Upload/Upload";
import uploaderURL from '../../images/upload-icon-20632.png'

const AddUser = () => {
    const [firstname,setFirstname] = useState<string>('')
    const [lastname,setLastname] = useState<string>('')
    const [about,setAbout] = useState<string>('')
    const [url1,setUrl1] = useState<string>(uploaderURL)

    const [addUser , {error}] = useMutation(ADD_USER, {
        update(cache,{data: {createUser}}){

            const {allUsers} : any = cache.readQuery({query: All_USERS})

            cache.writeQuery({
                query: All_USERS,
                data: { allUsers: [...allUsers , createUser] }
            })


        }
    })

    const handleAddUser = () => addUser({
        variables: {
            firstname,
            lastname,
            about,
            img: url1
        }
    })

    const handleSave = async () => {
        if (firstname !== "" && lastname !== "" && about !== "" && url1 !== uploaderURL){
            await handleAddUser();
            setFirstname("");
            setLastname("");
            setAbout("");
            setUrl1(uploaderURL);
        }else {
            alert("You have empty field")
        }
    }

    if (error) return <h1>ERROR</h1>

    return (
        <div className="add-user-section">
            <h2>Add new user</h2>
            <input placeholder="Firstname" value={firstname} onChange={({target: {value}}) => setFirstname(value) }/>
            <input placeholder="lastname" value={lastname} onChange={({target: {value}}) => setLastname(value)}/>
            <textarea placeholder="AboutUser" value={about} onChange={({target: {value}}) => setAbout(value)}></textarea>
            <Upload url={url1} onUploaded={setUrl1} id={'9823749821739'}/>
            <button onClick={handleSave}>Add</button>
        </div>
    );
};

export default AddUser;