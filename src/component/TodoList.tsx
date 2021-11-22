import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hook/use.typed.selector";
import {useAction} from "../hook/use.action";

const TodoList: FC = () => {

    const {items, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useAction()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Загрузка списка дел...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {items.map(todo =>
                <div
                    key={todo.id}
                >#{todo.id} {todo.title}</div>
            )}
            <div
                style={{
                    display: 'flex'
                }}
            >
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        key={p}
                        style={{
                            border: '1px solid black',
                            color: p === page ? 'white' : '',
                            backgroundColor: p === page ? 'black' : '',
                            padding: '10px'
                        }}
                    >{p}</div>
                )}
            </div>
        </div>
    )

}

export default TodoList