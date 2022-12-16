import UsersItem from "./UsersItem";
import "../../styles/users.css"
import AddUser from "./AddUser";
import SearchUser from "./SearchUser";
import {FC} from "react";
import {UsersProps} from "../../App";

const UsersList : FC<UsersProps>  = ({users}) => {

    return (
        <div>
            <h1 className="users-title">Users List</h1>
            <AddUser/>
            <SearchUser users={users}/>
            {
                users.map(({firstname,lastname,id,img,about}) => <UsersItem
                        firstname={firstname}
                        lastname={lastname}
                        img={img}
                        key={id}
                        id={id}
                        about={about}
                    />)
            }
        </div>
    );
};

export default UsersList;