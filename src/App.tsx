import {useQuery} from "@apollo/client";
import {All_USERS} from "./apollo/users";
import UsersList from "./components/Users/UsersList";
import React from "react";
import {User} from "./__generated__/graphql"

export type UsersProps = {
    users: Array<User>
}

export interface props {

}

const App : React.FC = () => {
    const {data, loading, error} = useQuery(All_USERS)

    if (loading) return <h1>Loading...</h1>

    if (error) return <h1>Error :(</h1>

    const {allUsers} = data

    const users : Array<User> = allUsers

    return (
        <div className='App'>
            <UsersList users={users}/>
        </div>
    );
}

export default App;