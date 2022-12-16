import React, {useState,FC} from 'react';
import {useMutation} from "@apollo/client";
import {All_USERS, DELETE_USER, UPDATE_USER} from "../../apollo/users";
import UserNameSection from "./UserNameSection";
import UserAbout from "./UserAbout";
import {User} from "../../__generated__/graphql";

const UsersItem : FC<User> = ({ firstname,lastname,img,id,about}) => {
    const [isUpdateMode,setUpdateMode] = useState<boolean>(false)
    const [url2,setUrl2] = useState<string>(img)
    const [firstnameInput , setFirstnameInput] = useState<string>(firstname)
    const [lastnameInput , setLastnameInput] = useState<string>(lastname)
    const [textareaInput , setTextareaInput] = useState<string>(about)

    const [updateUser , {error: updateError}] = useMutation(UPDATE_USER)
    const [deleteUser , {error}] = useMutation(DELETE_USER , {
        update(cache,{data: {removeUser}}) {
            const { allUsers } = cache.readQuery<{ allUsers: User[] }>({query: All_USERS}) || {}

            cache.writeQuery({
                query: All_USERS,
                data: {
                    allUsers: (allUsers || []).filter(user => user.id !== removeUser.id)
                }
            })
        }
    })

    const changeUpdateMode = () => setUpdateMode(!isUpdateMode)

    const updateUserFunc = () => {
        setUpdateMode(!isUpdateMode)

        return updateUser({
            variables: {
                id,
                firstname: firstnameInput,
                lastname: lastnameInput,
                img: url2,
                about: textareaInput
            },
        })
    }

    if (updateError || error) return <h1>TRAQAV</h1>

    return (
        <div className="user-item">
            <UserNameSection
                isUpdateMode={isUpdateMode}
                lastname={lastname}
                firstname={firstname}
                setFirstnameInput={setFirstnameInput}
                setLastnameInput={setLastnameInput}
            />
            <UserAbout
                isEditMode={isUpdateMode}
                img={img}
                about={about}
                setTextareaInput={setTextareaInput}
                url={url2}
                onUploaded={setUrl2}
            />
            <div className="users-item-buttons-section">
                <button
                    onClick={() => deleteUser({variables: {id}})}
                    className="delete-button">Delete</button>
                <button
                    onClick={isUpdateMode ? updateUserFunc : changeUpdateMode}
                    className="edite-button">{isUpdateMode ? "Save" : "Edit"}</button>
            </div>
        </div>
    );
};

export default UsersItem;