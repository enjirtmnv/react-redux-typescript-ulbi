import React from 'react';
import UserList from './components/UserList';
import TodoList from './components/TodoList'

function App() {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;