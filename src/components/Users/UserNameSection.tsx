import React from 'react';
import {UserNameProps} from "../../__generated__/graphql"

const UserNameSection : React.FC<UserNameProps> = ({isUpdateMode, firstname, lastname, setFirstnameInput, setLastnameInput}) => {

    if (isUpdateMode){
        return (
            <div className="users-item-name-section">
                <input
                    placeholder="Firstname"
                    defaultValue={firstname}
                    onChange={({target: {value}}) => {setFirstnameInput(value)}}
                />
                <input
                    placeholder="Lastname"
                    defaultValue={lastname}
                    onChange={({target: {value}}) => {setLastnameInput(value)}}
                />
            </div>
        );
    }else{
        return (
            <div className="users-item-name-section">
                <span>{firstname}</span>
                <span>{lastname}</span>
            </div>
        );
    }

};

export default UserNameSection;