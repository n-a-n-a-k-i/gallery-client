import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hook/use.typed.selector";
import {useAction} from "../hook/use.action";

const UserList: FC = () => {

    const {items, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Загрузка пользователей...</h1>
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
    )

}

export default UserList