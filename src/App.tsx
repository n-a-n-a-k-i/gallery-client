import React from 'react';
import UserList from "./component/UserList";
import TodoList from "./component/TodoList";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;