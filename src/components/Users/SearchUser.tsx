import React, {useEffect, FC, useState} from 'react';
import {UsersProps} from "../../App";
import {User} from "../../__generated__/graphql";

const SearchUser : FC<UsersProps> = ({users}) => {
    const [filteredUsers , setFilteredUsers] = useState<User[]>([])
    const [inputValue, setInputValue] = useState<string>("");

    function handleSearch({target: {value}}: React.ChangeEvent<HTMLInputElement>) : void{
            if(/^[a-zA-Z]+$/i.test(value)) {
                setInputValue(value);
            } else {
                let textArr = value.split('')
                let filteredTextArr = textArr.filter(str => str.match(/^[a-zA-Z]+$/i))
                setInputValue(filteredTextArr.join(''));
            }
        }

        useEffect(() => {
            let searched = inputValue.toLowerCase().trim().replace(/ /g, '')
            if(!inputValue) setFilteredUsers([]);
            if (/^[a-zA-Z]+$/i.test(inputValue)) {
                setFilteredUsers(users.filter(({firstname, lastname}) => {
                    let first = firstname.toLowerCase().trim()
                    let last = lastname.toLowerCase().trim()
                    return first.startsWith(searched) || last.startsWith(searched) || (first + last).startsWith(searched) || (last + first).startsWith(searched)
                }))
            }
        }, [users, inputValue])


    return (
        <div className="search-users">
            <label htmlFor="search">Search user</label>
            <input id="search" type="text" value={inputValue} onChange={handleSearch}/>
            <ul className="searched-users-list">
                {
                    filteredUsers.map(({firstname,id,lastname,img}) => {
                        return <li className="searched-users-item" key={id}>
                            <img src={img} alt="searched-user-img"/>
                            {firstname + " " + lastname}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default SearchUser;