import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hook/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action/user";

const UserList: FC = () => {

    const {items, loading, error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {items.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;